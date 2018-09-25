const fs = require('fs');
const path = require('path');
const { name } = require(path.resolve('package.json'));

const preset = require(path.resolve(`${name}.js`));

fs.writeFileSync(path.resolve('jest-preset.json'), JSON.stringify(preset, null, 2) + '\n', 'utf8');
