const https = require('https');
const fs = require('fs');

https.get('https://calveris.co.uk/assets/styles-B7gsd19s.css', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Find CSS variables
        const variables = [...data.matchAll(/--([a-zA-Z0-9-]+):\s*([^;]+);/g)].map(m => ({ name: m[1], value: m[2] }));
        
        // Group by root vs others, but here we just grab unique ones
        const uniqueVars = {};
        variables.forEach(v => {
            if (v.name.includes('color') || v.name.includes('font') || v.name.includes('bg') || v.name.includes('border') || v.name.includes('radius')) {
                uniqueVars[v.name] = v.value;
            }
        });

        // Search for some font-family declarations directly
        const fonts = [...data.matchAll(/font-family:\s*([^;}]+)/g)].map(m => m[1]);
        const uniqueFonts = [...new Set(fonts)];

        fs.writeFileSync('css-analysis.json', JSON.stringify({ variables: uniqueVars, fonts: uniqueFonts }, null, 2));
        console.log("CSS analysis completed. Variables found: " + Object.keys(uniqueVars).length);
    });
}).on('error', err => console.log('Error:', err.message));
