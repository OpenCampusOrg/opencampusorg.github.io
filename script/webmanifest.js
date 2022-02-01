const fs = require('fs/promise');
const path = require('path');

const manifest_json = {
  ...require('../dist/manifest.json'),
  short_name: require('../package.json').short_name
};

await fs.writeFile(path.resolve(__dirname, '..', 'dist', 'manifest.json'), JSON.stringify(manifest_json), 'utf-8');

await fs.rename(path.resolve(__dirname, '..', 'dist', 'manifest.json'), path.resolve(__dirname, '..', 'dist', 'manifest.webmanifest'));
console.log('Rename complete!');

const index_html = path.resolve(__dirname, '..', 'dist', 'index.html');
const file = await fs.readFile(index_html);
const lines = file.toString().replace(/(manifest).json/, '$1.webmanifest');
await fs.writeFile(index_html, lines, 'utf-8');
