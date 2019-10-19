const { readFileSync, writeFileSync } = require('fs');
const copydir = require('copy-dir');

let index = readFileSync('./dist/index.html').toString();

index = index
  .replace('src="/', 'src="./dist/')
  .replace('href="/', 'href="./dist/');

writeFileSync('./index.html', index);

copydir.sync('./src/documents', './documents', {
  utimes: true,
  mode: true,
  cover: true,
});
