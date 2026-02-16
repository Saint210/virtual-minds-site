const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report-new.json', 'utf8'));

console.log('--- Critical Network Requests (Blocking) ---');
const networkRequests = report.audits['network-requests'];
if (networkRequests && networkRequests.details && networkRequests.details.items) {
    const items = networkRequests.details.items;

    // Sort by endTime to see what finished last
    // But for blocking, we care about what *started* early and *finished* late
    const blocking = items;

    blocking.sort((a, b) => b.endTime - a.endTime);

    blocking.slice(0, 10).forEach(req => {
        const duration = req.endTime - req.startTime;
        console.log(`URL: ${req.url}`);
        console.log(`   Transfer Size: ${req.transferSize}`);
        console.log(`   Start Time: ${req.startTime}`);
        console.log(`   End Time: ${req.endTime}`);
        console.log(`   Duration: ${duration} ms`);
        console.log(`   MimeType: ${req.mimeType}`);
        console.log('---');
    });
} else {
    console.log('No network requests found in audit.');
}
