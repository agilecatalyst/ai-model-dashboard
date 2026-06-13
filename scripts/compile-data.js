import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'data');
const DIST_DIR = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// A simple YAML front-matter parser that handles key-values, lists, and basic nested objects
function parseYAML(yamlString) {
  const lines = yamlString.split('\n');
  const result = {};
  let currentModel = null;
  let currentKey = null;
  let inModels = false;

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Check if we are entering models list
    if (line.startsWith('models:')) {
      result.models = [];
      inModels = true;
      continue;
    }

    // Indentation checking
    const indent = line.length - line.trimStart().length;

    // Check for a new model entry
    if (trimmed.startsWith('- id:')) {
      currentModel = {
        id: trimmed.substring(5).trim(),
        benchmarks: {},
        best_applications: [],
        links: {}
      };
      result.models.push(currentModel);
      currentKey = null;
      continue;
    }

    if (inModels && currentModel) {
      if (indent === 4) {
        // Top-level model properties
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
          const key = trimmed.substring(0, colonIndex).trim();
          const val = trimmed.substring(colonIndex + 1).trim();
          if (key === 'benchmarks' || key === 'best_applications' || key === 'links') {
            currentKey = key;
          } else {
            // Check if value is number or boolean or string
            if (val === 'true') currentModel[key] = true;
            else if (val === 'false') currentModel[key] = false;
            else if (!isNaN(val) && val !== '') currentModel[key] = Number(val);
            else currentModel[key] = val.replace(/^['"]|['"]$/g, ''); // strip quotes
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
      } else if (indent === 6 && trimmed.startsWith('-')) {
        // List item in best_applications
        const val = trimmed.substring(1).trim().replace(/^['"]|['"]$/g, '');
        currentModel.best_applications.push(val);
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
  // parts[0] is empty because split starts at the boundary
  const yamlContent = parts[1];
  const bodyContent = parts.slice(2).join('---').trim();

  const frontmatter = parseYAML(yamlContent);
  return { frontmatter, body: bodyContent };
}

function run() {
  console.log('Compiling markdown data files...');
  const files = fs.readdirSync(DATA_DIR);
  const allModels = [];
  let ethicalAnalysis = '';
  let coCreationTips = '';

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);
    if (file === 'ethical_and_hallucination_analysis.md') {
      const { body } = parseMarkdownFile(filePath);
      ethicalAnalysis = body;
      console.log(`Processed analysis file: ${file}`);
    } else if (file === 'co_creation_tips.md') {
      const { body } = parseMarkdownFile(filePath);
      coCreationTips = body;
      console.log(`Processed co-creation tips file: ${file}`);
    } else if (file.endsWith('.md')) {
      const { frontmatter, body } = parseMarkdownFile(filePath);
      if (frontmatter.models) {
        frontmatter.models.forEach(model => {
          // Add the model details body as a property
          model.description_markdown = body;

          // Check for local system card PDF/MD
          const systemCardUrl = model.links ? model.links.system_card : null;
          if (systemCardUrl) {
            let filename = systemCardUrl.split('/').pop();
            // Map generic names or custom families to specific local names
            if (systemCardUrl.includes('/llama3_2/')) {
              filename = 'llama-3-2-model-card.md';
            } else if (systemCardUrl.includes('/llama3/blob') || systemCardUrl.includes('/llama3/')) {
              filename = 'llama-3-1-model-card.md';
            } else if (systemCardUrl.includes('/GLM-4') || systemCardUrl.toUpperCase().includes('/GLM-4')) {
              filename = 'glm-4-system-card.md';
            } else if (systemCardUrl.includes('/GLM-5') || systemCardUrl.toUpperCase().includes('/GLM-5')) {
              filename = 'glm-5-system-card.md';
            }

            const filePossibilities = [
              filename,
              filename.replace(/\.pdf$/, '.md'),
              `${model.id}-system-card.md`,
              `${model.id}-model-card.md`,
              `${model.id}-system-card.pdf`
            ];

            for (const pos of filePossibilities) {
              if (!pos) continue;
              const localPath = path.join(__dirname, '..', 'system_cards', pos);
              try {
                if (fs.existsSync(localPath) && fs.statSync(localPath).isFile() && !pos.endsWith('.info.txt')) {
                  model.local_system_card = `system_cards/${pos}`;
                  break;
                }
              } catch (e) {
                // Ignore stat errors
              }
            }
          }

          allModels.push(model);
        });
        console.log(`Processed model series file: ${file} (${frontmatter.models.length} models)`);
      }
    }
  }

  // Write compiled data to data.json
  const outputData = {
    models: allModels,
    ethical_analysis: ethicalAnalysis,
    co_creation_tips: coCreationTips,
    compiled_at: new Date().toISOString()
  };

  const outputPath = path.join(DIST_DIR, 'data.json');
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
  console.log(`Compiled successfully. Output saved to: ${outputPath}`);
}

run();
