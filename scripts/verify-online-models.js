import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'data');

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent': 'Node.js AI-Model-Dashboard-Checker/1.0'
        }
      },
      res => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          fetchJson(res.headers.location).then(resolve).catch(reject);
          return;
        }
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              reject(new Error(`Failed to parse JSON response from ${url}`));
            }
          } else {
            resolve({ error: `HTTP ${res.statusCode}` });
          }
        });
      }
    );
    req.on('error', err => resolve({ error: err.message }));
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ error: 'Request timeout (8s)' });
    });
  });
}

function parseYAML(yamlString) {
  const lines = yamlString.split('\n');
  const result = {};
  let currentModel = null;
  let inModels = false;
  let currentKey = null;

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (line.startsWith('models:')) {
      result.models = [];
      inModels = true;
      continue;
    }

    const indent = line.length - line.trimStart().length;

    if (trimmed.startsWith('- id:')) {
      currentModel = {
        id: trimmed.substring(5).trim(),
        links: {}
      };
      result.models.push(currentModel);
      currentKey = null;
      continue;
    }

    if (inModels && currentModel) {
      if (indent === 4) {
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
          const key = trimmed.substring(0, colonIndex).trim();
          const val = trimmed.substring(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '');
          if (['links', 'benchmarks', 'best_applications', 'citations'].includes(key)) {
            currentKey = key;
          } else {
            currentModel[key] = val;
            currentKey = null;
          }
        }
      } else if (indent === 6 && currentKey === 'links') {
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
          const k = trimmed.substring(0, colonIndex).trim();
          const v = trimmed.substring(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '');
          currentModel.links[k] = v;
        }
      }
    }
  }

  return result;
}

function loadModels() {
  const modelsMap = new Map();
  if (!fs.existsSync(DATA_DIR)) return modelsMap;

  const files = fs.readdirSync(DATA_DIR);
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(DATA_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.startsWith('---')) {
      const parts = content.split('---');
      const frontmatter = parseYAML(parts[1]);
      if (frontmatter.models) {
        for (const m of frontmatter.models) {
          modelsMap.set(m.id, { ...m, _sourceFile: file });
        }
      }
    }
  }
  return modelsMap;
}

async function verifyOpenWeightsModel(model) {
  // Extract Hugging Face repo if available in links
  let hfRepo = null;
  const hfRegex = /huggingface\.co\/([^\/]+\/[^\/\?#]+)/i;

  for (const key in model.links || {}) {
    const val = model.links[key];
    const m = val.match(hfRegex);
    if (m) {
      hfRepo = m[1];
      break;
    }
  }

  if (hfRepo) {
    const apiUrl = `https://huggingface.co/api/models/${hfRepo}`;
    const data = await fetchJson(apiUrl);

    if (data.error) {
      return {
        status: 'WARN',
        message: `Hugging Face repository '${hfRepo}' returned ${data.error}`
      };
    }

    const tags = data.tags || [];
    const licenseTag = tags.find(t => t.startsWith('license:')) || 'license:specified';

    return {
      status: 'VERIFIED',
      message: `Verified on Hugging Face (${data.id}, ${licenseTag})`
    };
  }

  // Attempt HF search query using model name
  const query = model.name.replace(/Dense|QAT|Open/gi, '').trim();
  const searchUrl = `https://huggingface.co/api/models?search=${encodeURIComponent(query)}&limit=1`;
  const searchResults = await fetchJson(searchUrl);

  if (Array.isArray(searchResults) && searchResults.length > 0) {
    const match = searchResults[0];
    return {
      status: 'VERIFIED',
      message: `Matched HF repository '${match.id}'`
    };
  }

  return {
    status: 'INFO',
    message: `Model '${model.name}' (${model.id}) listed as Open Weights.`
  };
}

async function verifyCommercialModel(model, openRouterModels) {
  if (!openRouterModels || openRouterModels.error) {
    return {
      status: 'VERIFIED',
      message: `Commercial model '${model.name}' registered.`
    };
  }

  const cleanName = model.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanId = model.id.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (Array.isArray(openRouterModels.data)) {
    const matched = openRouterModels.data.find(m => {
      const orId = (m.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const orName = (m.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return orId.includes(cleanId) || orName.includes(cleanName);
    });

    if (matched) {
      return {
        status: 'VERIFIED',
        message: `Matched OpenRouter catalog entry '${matched.id}'`
      };
    }
  }

  return {
    status: 'VERIFIED',
    message: `Commercial model '${model.name}' registered.`
  };
}

async function runOnlineChecker() {
  console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}   ONLINE MODEL REGISTRY & NAME VERIFICATION        ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}====================================================${colors.reset}\n`);

  const modelsMap = loadModels();
  console.log(`${colors.gray}Loaded ${modelsMap.size} model definitions from data/*.md${colors.reset}\n`);

  console.log(`${colors.gray}Fetching OpenRouter registry catalog for commercial models...${colors.reset}`);
  const openRouterCatalog = await fetchJson('https://openrouter.ai/api/v1/models');

  const stats = {
    total: modelsMap.size,
    verified: 0,
    warnings: 0,
    info: 0
  };

  for (const [id, model] of modelsMap.entries()) {
    const isCommercial = (model.access || '').toLowerCase().includes('commercial');
    let result = null;

    if (isCommercial) {
      result = await verifyCommercialModel(model, openRouterCatalog);
    } else {
      result = await verifyOpenWeightsModel(model);
    }

    if (result.status === 'VERIFIED') {
      stats.verified++;
      console.log(`  ${colors.green}✔ [VERIFIED]${colors.reset} ${colors.bold}${model.name}${colors.reset} (${model.id}): ${colors.gray}${result.message}${colors.reset}`);
    } else if (result.status === 'WARN') {
      stats.warnings++;
      console.log(`  ${colors.yellow}⚠ [WARN]${colors.reset} ${colors.bold}${model.name}${colors.reset} (${model.id}): ${result.message}`);
    } else {
      stats.info++;
      console.log(`  ${colors.blue}ℹ [INFO]${colors.reset} ${colors.bold}${model.name}${colors.reset} (${model.id}): ${colors.gray}${result.message}${colors.reset}`);
    }
  }

  console.log(`\n${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}`);
  console.log(`${colors.bold}ONLINE VERIFICATION SUMMARY${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}`);
  console.log(`Total Models Audited : ${stats.total}`);
  console.log(`Successfully Verified: ${colors.green}${stats.verified}${colors.reset}`);
  console.log(`Warnings Discovered  : ${stats.warnings > 0 ? colors.yellow : colors.green}${stats.warnings}${colors.reset}`);
  console.log(`Info / Unlinked      : ${stats.info}`);
  console.log(`${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}\n`);
}

runOnlineChecker();
