const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim()

let result = [];
for (let i = 1; i <= n; i++) {
    if (i === 1) {
        result.push(' '.repeat(n - i) + '*');
    } else if (i === n) {
        result.push('*'.repeat(2 * n - 1));
    } else {
        result.push(' '.repeat(n - i) + '*' + ' '.repeat(2 * i - 3) + '*');
    }
}

console.log(result.join('\n'));
