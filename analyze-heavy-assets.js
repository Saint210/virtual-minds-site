const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('--- Top 20 Heavy Assets ---');
const networkAudit = report.audits['network-requests'];
if (networkAudit && networkAudit.details && networkAudit.details.items) {
    const items = networkAudit.details.items;
    const sorted = [...items].sort((a, b) => b.transferSize - a.transferSize);

    sorted.slice(0, 20).forEach(req => {
        const sizeKB = (req.transferSize / 1024).toFixed(1);
        console.log(`${sizeKB} KB - ${req.url}`);
    });
}
