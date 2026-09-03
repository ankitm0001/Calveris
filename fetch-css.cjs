const https = require('https');
const fs = require('fs');

https.get('https://calveris.co.uk/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Find CSS file links
        const cssLinks = [...data.matchAll(/href="([^"]+\.css[^"]*)"/g)].map(m => m[1]);
        const styles = [...data.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]);
        
        console.log("CSS Links Found:");
        console.log(cssLinks);
        
        if (styles.length > 0) {
            console.log("\nInline Styles extracted:");
            console.log(styles[0].substring(0, 1000) + '...');
        }
        
        fs.writeFileSync('fetch-result.json', JSON.stringify({cssLinks, styles}));
    });
}).on('error', err => console.log('Error:', err.message));
