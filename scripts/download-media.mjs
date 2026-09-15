import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const scratchDir = '/Users/osama/.gemini/antigravity/brain/dd53f728-1698-4b27-980a-5c60a9f8f325/scratch';
const htmlFiles = fs.readdirSync(scratchDir).filter(f => f.endsWith('.html'));

const mediaMap = {};

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(scratchDir, file), 'utf8');
  // Match full URL up to extension
  const matches = content.match(/https:\/\/web\.archive\.org\/web\/[0-9]+[a-z_]*\/https:\/\/syrianidentity\.sy\/media\/[a-zA-Z0-9_\-\.\/]+\.(?:jpg|jpeg|png|svg|webp|mp4)/gi) || [];
  for (let fullUrl of matches) {
    fullUrl = fullUrl.replace(/[\)"'`;]+$/, '');
    const relMatch = fullUrl.match(/https:\/\/syrianidentity\.sy\/(media\/[a-zA-Z0-9_\-\.\/]+\.(?:jpg|jpeg|png|svg|webp|mp4))/i);
    if (relMatch) {
      const relPath = relMatch[1];
      const filename = path.basename(relPath);
      mediaMap[relPath] = { fullUrl, filename };
    }
  }
}

const entries = Object.entries(mediaMap);
console.log(`Found ${entries.length} clean media items to archive locally.`);

fs.mkdirSync('public/assets/media', { recursive: true });

let successCount = 0;
for (const [relPath, info] of entries) {
  const targetFile = path.join('public/assets/media', info.filename);
  if (!fs.existsSync(targetFile) || fs.statSync(targetFile).size === 0) {
    try {
      execSync(`curl -s -f -L "${info.fullUrl}" -o "${targetFile}"`, { timeout: 15000 });
      successCount++;
      process.stdout.write('.');
    } catch (err) {
      console.warn(`\nFailed to download ${info.fullUrl}`);
    }
  } else {
    successCount++;
    process.stdout.write('+');
  }
}
console.log(`\nSuccessfully preserved ${successCount} / ${entries.length} media files!`);

fs.writeFileSync('src/data/mediaMapping.json', JSON.stringify(mediaMap, null, 2));
