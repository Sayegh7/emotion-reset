#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


// Read version from the reset.css package and write it in our package.json
const resetPackage = JSON.parse(fs.readFileSync('./node_modules/reset.css/package.json', 'utf8'));

// const resetVersion = resetPackage.version;

const data = fs.readFileSync('./package.json', 'utf8');
const package = JSON.parse(data);
// package.version = resetVersion;

fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));

// Read css from reset.css, clean comments and write it in our index.js
const resetMain = path.join('./node_modules/reset.css', resetPackage.main);
const readStream = fs.readFileSync(resetMain, 'utf8');
const regex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
const reset = readStream.replace(regex, '').replace(/^\s*\n/gm, '');

const contents = `import {css} from '@emotion/core';\n\nconst reset = css\`\n${reset}\`;\n\nexport default reset;`;

fs.writeFileSync('./src/index.js', contents);
