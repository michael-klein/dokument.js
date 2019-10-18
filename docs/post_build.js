const { readFileSync, writeFileSync } = require('fs');
let index = readFileSync('./index.html').toString();

index = index.replace('src="/', 'src="./').replace('href="/', 'href="./');

writeFileSync('./index.html', index);
