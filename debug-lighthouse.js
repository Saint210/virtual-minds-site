const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('Audit Keys:', Object.keys(report.audits).filter(k => k.includes('contentful')));

const lcpElement = report.audits['largest-contentful-paint-element'];
if (lcpElement) {
    console.log('LCP Element Audit Found');
    console.log('Details:', JSON.stringify(lcpElement.details, null, 2));
} else {
    console.log('LCP Element Audit NOT Found');
}

const lcpMetric = report.audits['largest-contentful-paint'];
if (lcpMetric) {
    console.log('LCP Metric Audit Found');
    // console.log('Details:', JSON.stringify(lcpMetric.details, null, 2));
}
