import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '..', 'system_cards');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const cardsToDownload = [
  {
    filename: 'gpt-4o-system-card.pdf',
    url: 'https://assets.ctfassets.net/kftzwdyau1h5/13W659M7xWkRt2f7W9Hspg/fb373ca9db86fa6443c5ee9659b8c04f/gpt-4o-system-card.pdf'
  },
  {
    filename: 'gpt-4o-mini-system-card.pdf',
    url: 'https://assets.ctfassets.net/kftzwdyau1h5/20c54ea6e88fb98ff8e3e4a3501a357f/gpt-4o-mini-system-card.pdf'
  },
  {
    filename: 'o1-system-card.pdf',
    url: 'https://assets.ctfassets.net/kftzwdyau1h5/6984eb8a-c603-4c90-9c2b-426b38c2134a/o1-system-card.pdf'
  },
  {
    filename: 'llama-3-1-model-card.md',
    url: 'https://raw.githubusercontent.com/meta-llama/llama3/main/MODEL_CARD.md'
  },
  {
    filename: 'llama-3-2-model-card.md',
    url: 'https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md'
  },
  {
    filename: 'gemma-2-report.pdf',
    url: 'https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf'
  },
  {
    filename: 'Gemma3Report.pdf',
    url: 'https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf'
  },
  {
    filename: 'gemini-1-5-report.pdf',
    url: 'https://arxiv.org/pdf/2403.05530'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete local file on error
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting system cards download. Target directory: ${TARGET_DIR}`);
  for (const card of cardsToDownload) {
    const destPath = path.join(TARGET_DIR, card.filename);
    console.log(`Downloading ${card.filename}...`);
    try {
      await downloadFile(card.url, destPath);
      console.log(`Successfully downloaded: ${card.filename}`);
    } catch (error) {
      console.error(`Warning: Failed to download ${card.filename}. Error: ${error.message}`);
      // Write placeholder metadata if file download failed, to avoid empty folders
      fs.writeFileSync(
        destPath + '.info.txt',
        `Source URL: ${card.url}\nDownload failed. Refer to online URL.`
      );
    }
  }
  console.log('System cards download finished.');
}

run();
