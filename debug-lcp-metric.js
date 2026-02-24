const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

const lcp = report.audits['largest-contentful-paint'];
console.log(JSON.stringify(lcp, null, 2));
