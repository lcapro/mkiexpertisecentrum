const { execSync } = require('child_process');
const fs = require('fs');
const assert = require('assert');

// run build
execSync('npm run build', { stdio: 'inherit' });

// check if _site/style.css exists
assert.ok(fs.existsSync('_site/style.css'), '_site/style.css should exist after build');

console.log('Build test passed');
