const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('--- LCP Analysis ---');
const lcpAudit = report.audits['largest-contentful-paint-element'];
if (lcpAudit && lcpAudit.details && lcpAudit.details.items && lcpAudit.details.items.length > 0) {
    const item = lcpAudit.details.items[0];
    if (item.node && item.node.snippet) {
        console.log('LCP Element HTML:', item.node.snippet);
    }
    if (item.node && item.node.selector) {
        console.log('LCP Selector:', item.node.selector);
    }
} else {
    console.log('LCP Element details not found.');
}

console.log('\n--- Server Response Time (TTFB) ---');
const ttfbAudit = report.audits['server-response-time'];
if (ttfbAudit) {
    console.log('TTFB:', ttfbAudit.displayValue);
    if (ttfbAudit.details && ttfbAudit.details.items && ttfbAudit.details.items.length > 0) {
        console.log('Initial URL:', ttfbAudit.details.items[0].url);
        console.log('Response Time:', ttfbAudit.details.items[0].responseTime, 'ms');
    }
}

console.log('\n--- Network Payloads (Top 5 by size) ---');
const networkAudit = report.audits['network-requests'];
if (networkAudit && networkAudit.details && networkAudit.details.items) {
    const network = networkAudit.details.items;

    // Sort by transferSize (what went over the wire)
    const sorted = [...network].sort((a, b) => b.transferSize - a.transferSize);

    sorted.slice(0, 5).forEach(req => {
        const sizeKB = (req.transferSize / 1024).toFixed(1);
        const name = req.url.length > 80 ? req.url.substring(0, 77) + '...' : req.url;
        console.log(`${sizeKB} KB - ${name}`);
    });
}
