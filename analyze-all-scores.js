const fs = require('fs');

try {
    const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));
    const categories = report.categories;

    console.log('--- Current Scores ---');
    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        console.log(`${cat.title}: ${Math.round(cat.score * 100)}`);
    });

    console.log('\n--- Top Issues by Category ---');
    Object.keys(categories).forEach(key => {
        if (key === 'performance') return; // Already analyzed
        const cat = categories[key];
        if (cat.score < 1) {
            console.log(`\n[${cat.title}]`);
            cat.auditRefs.filter(ref => ref.weight > 0).forEach(ref => {
                const audit = report.audits[ref.id];
                if (audit.score !== 1 && audit.score !== null) {
                    console.log(`- ${audit.title} (Score: ${audit.score})`);
                }
            });
        }
    });

} catch (err) {
    console.error(err);
}
