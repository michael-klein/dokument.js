const copydir = require('copy-dir');
copydir.sync('./src/documents', './dist/documents', {
  utimes: true,
  mode: true,
  cover: true,
});
