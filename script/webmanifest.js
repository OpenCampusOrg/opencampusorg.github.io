const fs = require('fs');
const path = require('path');

fs.rename(path.resolve(__dirname, '..', 'dist', 'manifest.json'), path.resolve(__dirname, '..', 'dist', 'manifest.webmanifest'), err => {
  if (err) throw err;
  console.log('Rename complete!');
});

const index_html = path.resolve(__dirname, '..', 'dist', 'index.html');
const file = fs.readFileSync(index_html);
const lines = file.toString().replace(/(manifest).json/, '$1.webmanifest');
fs.writeFileSync(index_html, lines, 'utf-8');
