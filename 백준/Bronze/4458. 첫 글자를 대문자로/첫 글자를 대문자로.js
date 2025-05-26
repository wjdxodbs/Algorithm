const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
    const line = input[i];
    const result = line.charAt(0).toUpperCase() + line.slice(1);
    console.log(result);
}
