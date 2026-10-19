import fs from 'node:fs';
import path from 'node:path';

const distDir = 'dist';
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy index.html
if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', path.join(distDir, 'index.html'));
}

// Copy assets
if (fs.existsSync('assets')) {
  fs.cpSync('assets', path.join(distDir, 'assets'), { recursive: true });
}

// Copy other static files if needed
const staticFiles = ['index.css', 'favicon.ico'];
for (const file of staticFiles) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(distDir, file));
  }
}

console.log('Successfully built static site to dist/');
