const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('--- Accessibility Failures ---');

const audits = report.categories.accessibility.auditRefs
    .filter(ref => ref.weight > 0)
    .map(ref => report.audits[ref.id])
    .filter(audit => audit.score !== 1 && audit.score !== null);

audits.forEach(audit => {
    console.log(`\n❌ ${audit.title}`);
    console.log(`   ${audit.description}`);
    if (audit.details && audit.details.items) {
        audit.details.items.forEach(item => {
            if (item.node && item.node.snippet) {
                console.log(`   Element: ${item.node.snippet}`);
            }
            if (item.node && item.node.selector) {
                console.log(`   Selector: ${item.node.selector}`);
            }
        });
    }
});
