const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report-new.json', 'utf8'));

console.log('Available Audit Keys:', Object.keys(report.audits));
console.log('--- Details for network-requests ---');
const nr = report.audits['network-requests'];
if (nr) {
    console.log('Has details?', !!nr.details);
    if (nr.details) {
        console.log('Type:', nr.details.type);
        console.log('Items length:', nr.details.items ? nr.details.items.length : 'No items');
    }
} else {
    console.log('network-requests audit NOT found');
}
