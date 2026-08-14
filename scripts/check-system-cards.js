import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_CARDS_DIR = path.join(__dirname, '..', 'system_cards');
const DATA_DIR = path.join(__dirname, '..', 'data');

// ANSI Color helper
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

// YAML Frontmatter parser for data/*.md
function parseYAML(yamlString) {
  const lines = yamlString.split('\n');
  const result = {};
  let currentModel = null;
  let currentKey = null;
  let inModels = false;

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
        benchmarks: {},
        best_applications: [],
        links: {},
        citations: []
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
          const val = trimmed.substring(colonIndex + 1).trim();
          if (['benchmarks', 'best_applications', 'links', 'citations'].includes(key)) {
            currentKey = key;
          } else {
            if (val === 'true') currentModel[key] = true;
            else if (val === 'false') currentModel[key] = false;
            else if (!isNaN(val) && val !== '') currentModel[key] = Number(val);
            else currentModel[key] = val.replace(/^['"]|['"]$/g, '');
            currentKey = null;
          }
        }
      } else if (indent === 6 && currentKey === 'benchmarks') {
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
          const k = trimmed.substring(0, colonIndex).trim();
          const v = Number(trimmed.substring(colonIndex + 1).trim());
          currentModel.benchmarks[k] = v;
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

function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (!content.startsWith('---')) {
    return { frontmatter: {}, body: content };
  }
  const parts = content.split('---');
  const yamlContent = parts[1];
  const bodyContent = parts.slice(2).join('---').trim();
  const frontmatter = parseYAML(yamlContent);
  return { frontmatter, body: bodyContent };
}

// Load all models from data/*.md
function loadDatasetModels() {
  const modelsMap = new Map();
  if (!fs.existsSync(DATA_DIR)) return modelsMap;

  const files = fs.readdirSync(DATA_DIR);
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(DATA_DIR, file);
    const { frontmatter } = parseMarkdownFile(filePath);
    if (frontmatter.models) {
      for (const m of frontmatter.models) {
        modelsMap.set(m.id, { ...m, _sourceFile: file });
      }
    }
  }
  return modelsMap;
}

// Map model ID or links to expected local system card filename
function resolveSystemCardFile(model) {
  const systemCardUrl = model.links ? model.links.system_card : null;
  if (!systemCardUrl) return null;

  let filename = systemCardUrl.split('/').pop();
  if (systemCardUrl.includes('/llama3_2/')) filename = 'llama-3-2-model-card.md';
  else if (systemCardUrl.includes('/llama3/blob') || systemCardUrl.includes('/llama3/')) filename = 'llama-3-1-model-card.md';
  else if (systemCardUrl.toUpperCase().includes('/GLM-4')) filename = 'glm-4-system-card.md';
  else if (systemCardUrl.toUpperCase().includes('/GLM-5')) filename = 'glm-5-system-card.md';

  const possibilities = [
    filename,
    filename ? filename.replace(/\.pdf$/, '.md') : null,
    `${model.id}-system-card.md`,
    `${model.id}-model-card.md`,
    `${model.id}-system-card.pdf`
  ].filter(Boolean);

  for (const pos of possibilities) {
    const localPath = path.join(SYSTEM_CARDS_DIR, pos);
    if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
      return pos;
    }
  }
  return null;
}

// Extract Markdown table data
function parseMarkdownTable(tableLines) {
  if (tableLines.length < 2) return null;

  const parseRow = row => row.split('|').map(c => c.trim()).filter((c, i, a) => i > 0 && i < a.length - 1);
  const headers = parseRow(tableLines[0]);
  const rows = [];

  for (let i = 2; i < tableLines.length; i++) {
    if (!tableLines[i].includes('|')) continue;
    const cells = parseRow(tableLines[i]);
    if (cells.length > 0) {
      rows.push(cells);
    }
  }

  return { headers, rows };
}

// Normalization key for benchmark metrics
function normalizeMetricKey(name) {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (clean.includes('mmlu')) return 'mmlu';
  if (clean.includes('gpqa')) return 'gpqa';
  if (clean.includes('swe')) return 'swe_bench';
  if (clean.includes('human')) return 'human_eval';
  if (clean.includes('aime')) return 'aime';
  return clean;
}

// Helper to normalize model string for matching
function normalizeModelString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Match header string to a dataset model
function matchModelHeader(headerName, modelsList) {
  const headerNorm = normalizeModelString(headerName);

  // 1. Exact match on name or ID
  for (const m of modelsList) {
    if (normalizeModelString(m.name) === headerNorm || normalizeModelString(m.id) === headerNorm) {
      return m;
    }
  }

  // 2. Longer name prefix / substring match (sorted by length descending to match gpt-4o-mini before gpt-4o)
  const sortedModels = [...modelsList].sort((a, b) => b.id.length - a.id.length);
  for (const m of sortedModels) {
    const idNorm = normalizeModelString(m.id);
    const nameNorm = normalizeModelString(m.name);
    if (headerNorm === idNorm || headerNorm === nameNorm) {
      return m;
    }
  }

  return null;
}

// Audit a single Markdown system card
function auditMarkdownCard(filename, filePath, modelsMap) {
  const issues = { errors: [], warnings: [], info: [] };
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const modelsList = Array.from(modelsMap.values());

  // 1. Check title (H1)
  const hasH1 = lines.some(l => l.startsWith('# '));
  if (!hasH1) {
    issues.errors.push('Missing H1 title tag (`# Title`).');
  }

  // 2. Check required H2 sections
  const requiredH2 = ['Technical Specifications', 'Performance Benchmarks', 'Safety and Alignment'];
  for (const req of requiredH2) {
    const regex = new RegExp(`^##\\s+.*${req.replace(/\s+/g, '\\s+')}`, 'i');
    if (!lines.some(l => regex.test(l))) {
      issues.warnings.push(`Missing recommended section \`## ${req}\`.`);
    }
  }

  // 3. Check for placeholders
  const placeholders = ['TODO', 'TBD', 'FIXME', 'UNDEFINED', '[INSERT'];
  lines.forEach((line, idx) => {
    for (const ph of placeholders) {
      if (line.toUpperCase().includes(ph)) {
        issues.warnings.push(`Line ${idx + 1}: Contains placeholder '${ph}'.`);
      }
    }
  });

  // 4. Parse benchmark table if present
  let tableLines = [];
  let inTable = false;
  for (const line of lines) {
    if (line.trim().startsWith('|')) {
      inTable = true;
      tableLines.push(line.trim());
    } else if (inTable) {
      break;
    }
  }

  let tableData = null;
  if (tableLines.length >= 3) {
    tableData = parseMarkdownTable(tableLines);
  }

  // 5. Cross-verify table numbers against data/*.md if model matches
  if (tableData) {
    const { headers, rows } = tableData;

    headers.forEach((headerName, colIdx) => {
      if (colIdx === 0) return; // Benchmark name column

      const matchedModel = matchModelHeader(headerName, modelsList);

      if (matchedModel) {
        issues.info.push(`Cross-verifying table column '${headerName}' against dataset model '${matchedModel.id}'.`);

        rows.forEach(rowCells => {
          if (rowCells.length <= colIdx) return;
          const metricRaw = rowCells[0];
          const valRaw = rowCells[colIdx];
          const metricKey = normalizeMetricKey(metricRaw);
          const numericVal = parseFloat(valRaw.replace(/%/g, ''));

          if (matchedModel.benchmarks && matchedModel.benchmarks[metricKey] !== undefined) {
            const expectedVal = matchedModel.benchmarks[metricKey];
            if (!isNaN(numericVal) && Math.abs(numericVal - expectedVal) > 0.05) {
              issues.errors.push(
                `DISCREPANCY in '${matchedModel.id}' (${headerName}): Card specifies ${metricRaw} = ${valRaw} (${numericVal}), but data/${matchedModel._sourceFile} specifies ${expectedVal}!`
              );
            }
          }

          // Check value bounds [0, 100]
          if (!isNaN(numericVal) && (numericVal < 0 || numericVal > 100)) {
            issues.errors.push(`Invalid benchmark percentage for ${metricRaw} (${valRaw}) in column '${headerName}'.`);
          }
        });
      }
    });
  }

  // 6. Check hallucination rate mention
  const hallucinationMatch = content.match(/hallucination\s+rate\s+is\s*(?:evaluated\s+at|reduced\s+to\s+an\s+impressive)?\s*\*?\*?([\d\.]+)%\*?\*?/i);
  if (hallucinationMatch) {
    const cardHallucinationVal = parseFloat(hallucinationMatch[1]);
    const fileBase = filename.replace(/-(system|model)-card\.md$/, '');
    const matchedModel = modelsMap.get(fileBase);
    if (matchedModel && matchedModel.hallucination_rate !== undefined) {
      if (Math.abs(cardHallucinationVal - matchedModel.hallucination_rate) > 0.05) {
        issues.errors.push(
          `DISCREPANCY in hallucination rate for '${matchedModel.id}': Card states ${cardHallucinationVal}%, but data/${matchedModel._sourceFile} states ${matchedModel.hallucination_rate}%!`
        );
      }
    }
  }

  return issues;
}

// Audit PDF sidecar files (.pdf.info.txt)
function auditPdfCard(filename, filePath) {
  const issues = { errors: [], warnings: [], info: [] };
  const infoFile = filePath + '.info.txt';

  if (!fs.existsSync(infoFile)) {
    issues.warnings.push(`PDF file '${filename}' is missing metadata sidecar file ('${filename}.info.txt').`);
  } else {
    const infoContent = fs.readFileSync(infoFile, 'utf-8');
    if (!infoContent.includes('http://') && !infoContent.includes('https://')) {
      issues.warnings.push(`Sidecar info file '${filename}.info.txt' does not contain a valid source URL.`);
    } else {
      issues.info.push(`PDF sidecar verified with source reference.`);
    }
  }

  return issues;
}

function runNulliusInVerbaChecker() {
  console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}   NULLIUS IN VERBA - SYSTEM CARD VERIFICATION      ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}====================================================${colors.reset}\n`);

  const modelsMap = loadDatasetModels();
  console.log(`${colors.gray}Loaded ${modelsMap.size} model definitions from data/*.md${colors.reset}\n`);

  if (!fs.existsSync(SYSTEM_CARDS_DIR)) {
    console.error(`${colors.red}Error: Directory system_cards/ does not exist!${colors.reset}`);
    process.exit(1);
  }

  const files = fs.readdirSync(SYSTEM_CARDS_DIR);
  const cardFiles = files.filter(f => !f.endsWith('.info.txt'));

  const stats = {
    totalFiles: cardFiles.length,
    passed: 0,
    warnings: 0,
    errors: 0,
    missingCards: 0,
    orphanCards: 0
  };

  const usedFiles = new Set();

  // Step 1: Audit existing system cards
  for (const filename of cardFiles) {
    const filePath = path.join(SYSTEM_CARDS_DIR, filename);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    usedFiles.add(filename);

    console.log(`${colors.bold}Auditing:${colors.reset} ${colors.blue}${filename}${colors.reset}`);

    let issues = { errors: [], warnings: [], info: [] };
    if (filename.endsWith('.md')) {
      issues = auditMarkdownCard(filename, filePath, modelsMap);
    } else if (filename.endsWith('.pdf')) {
      issues = auditPdfCard(filename, filePath);
    }

    if (issues.errors.length === 0 && issues.warnings.length === 0) {
      console.log(`  ${colors.green}✔ PASS - Card is well-structured and aligned with dataset.${colors.reset}`);
      stats.passed++;
    } else {
      if (issues.errors.length > 0) {
        stats.errors += issues.errors.length;
        issues.errors.forEach(e => console.log(`  ${colors.red}✘ [ERROR] ${e}${colors.reset}`));
      }
      if (issues.warnings.length > 0) {
        stats.warnings += issues.warnings.length;
        issues.warnings.forEach(w => console.log(`  ${colors.yellow}⚠ [WARN] ${w}${colors.reset}`));
      }
    }
    issues.info.forEach(i => console.log(`  ${colors.gray}ℹ [INFO] ${i}${colors.reset}`));
    console.log('');
  }

  // Step 2: Check for missing system cards for models in dataset
  console.log(`${colors.bold}Checking Dataset Coverage (Missing & Orphan Cards)...${colors.reset}`);
  for (const [id, model] of modelsMap.entries()) {
    if (model.links && model.links.system_card) {
      const resolved = resolveSystemCardFile(model);
      if (!resolved) {
        console.log(`  ${colors.yellow}⚠ [MISSING CARD] Model '${id}' specifies system_card link (${model.links.system_card}) but no local file exists in system_cards/${colors.reset}`);
        stats.missingCards++;
      } else {
        usedFiles.add(resolved);
      }
    }
  }

  // Step 3: Check for orphan system cards
  for (const filename of cardFiles) {
    if (!usedFiles.has(filename)) {
      console.log(`  ${colors.gray}ℹ [ORPHAN CARD] File 'system_cards/${filename}' exists but is not directly referenced by any model in data/*.md.${colors.reset}`);
      stats.orphanCards++;
    }
  }

  // Summary Report
  console.log(`\n${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}`);
  console.log(`${colors.bold}VERIFICATION SUMMARY${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}`);
  console.log(`Total System Cards Checked : ${stats.totalFiles}`);
  console.log(`Fully Passed Cards         : ${colors.green}${stats.passed}${colors.reset}`);
  console.log(`Total Errors Discovered    : ${stats.errors > 0 ? colors.red : colors.green}${stats.errors}${colors.reset}`);
  console.log(`Total Warnings Discovered  : ${stats.warnings > 0 ? colors.yellow : colors.green}${stats.warnings}${colors.reset}`);
  console.log(`Missing Local Cards        : ${stats.missingCards > 0 ? colors.yellow : colors.green}${stats.missingCards}${colors.reset}`);
  console.log(`Orphan Cards               : ${stats.orphanCards}`);
  console.log(`${colors.bold}${colors.cyan}----------------------------------------------------${colors.reset}\n`);

  if (stats.errors > 0) {
    console.log(`${colors.red}${colors.bold}FAIL: Nullius in Verba check detected data discrepancies or structural errors!${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`${colors.green}${colors.bold}SUCCESS: All system cards passed Nullius in Verba verification!${colors.reset}\n`);
    process.exit(0);
  }
}

runNulliusInVerbaChecker();
