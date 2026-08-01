const fs = require('fs');
const https = require('https');
const path = require('path');

const jsContent = fs.readFileSync('C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\188\\content.md', 'utf8');
const htmlContent = fs.readFileSync('C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\182\\content.md', 'utf8');

const combined = jsContent + '\n' + htmlContent;

// Extract all paths ending in media extensions
const assetRegex = /["']([^"'\s]+\.(png|jpg|jpeg|webp|svg|ktx|glb|ico|webmanifest|woff2|woff|ttf))["']/gi;
const foundAssets = [];
let m;
while ((m = assetRegex.exec(combined)) !== null) {
  let assetPath = m[1].trim();
  if (assetPath.startsWith('http') || assetPath.startsWith('data:')) continue;
  if (assetPath.startsWith('./')) assetPath = assetPath.slice(2);
  if (assetPath.startsWith('/')) assetPath = assetPath.slice(1);
  if (assetPath.length < 3 || assetPath.length > 150) continue;
  foundAssets.push(assetPath);
}

const uniqueAssets = [...new Set(foundAssets)];
console.log(`Found ${uniqueAssets.length} unique asset files across HTML & JS.`);
fs.writeFileSync('all_greenveil_assets.txt', uniqueAssets.join('\n'), 'utf8');

// Downloader
async function downloadFile(relPath) {
  const targetPath = path.join(__dirname, relPath);
  const targetDir = path.dirname(targetPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const url = `https://greenveil.xyz/${relPath}`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(targetPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`[OK] ${relPath}`);
          resolve(true);
        });
      } else {
        console.log(`[SKIP ${res.statusCode}]: ${relPath}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`[ERR]: ${relPath} - ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting bulk download of ${uniqueAssets.length} assets...`);
  for (const asset of uniqueAssets) {
    await downloadFile(asset);
  }
  console.log('All GreenVeil asset downloads finished!');
}

run();
