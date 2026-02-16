const fs = require('fs');

try {
    const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

    console.log('--- Core Web Vitals ---');
    const categories = report.categories;
    console.log(`Performance Score: ${categories.performance.score * 100}`);
    console.log(`LCP (Largest Contentful Paint): ${report.audits['largest-contentful-paint'].displayValue}`);
    console.log(`FCP (First Contentful Paint): ${report.audits['first-contentful-paint'].displayValue}`);
    console.log(`CLS (Cumulative Layout Shift): ${report.audits['cumulative-layout-shift'].displayValue}`);
    console.log(`TBT (Total Blocking Time): ${report.audits['total-blocking-time'].displayValue}`);
    console.log(`Speed Index: ${report.audits['speed-index'].displayValue}`);

    console.log('\n--- Top Opportunities ---');
    const opportunities = Object.values(report.audits)
        .filter(audit => audit.details && audit.details.type === 'opportunity' && audit.score < 0.9)
        .sort((a, b) => (b.details.overallSavingsMs || 0) - (a.details.overallSavingsMs || 0))
        .slice(0, 5);

    opportunities.forEach(opp => {
        console.log(`- ${opp.title}: ${opp.displayValue} (Est. Savings: ${Math.round(opp.details.overallSavingsMs)}ms)`);
    });

    console.log('\n--- Diagnostics ---');
    const diagnostics = Object.values(report.audits)
        .filter(audit => audit.score === 0 || audit.score === null)
        .filter(audit => !audit.details || audit.details.type !== 'opportunity')
        .slice(0, 5);

    diagnostics.forEach(diag => {
        console.log(`- ${diag.title}`);
    });

} catch (err) {
    console.error('Error parsing report:', err.message);
}
