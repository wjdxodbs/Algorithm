const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [word1, word2] = input[i].split(' ');
    const result = [];
    for (let j = 0; j < word1.length; j++) {
        const x = word1.charCodeAt(j) - 64;
        const y = word2.charCodeAt(j) - 64;
        if (y >= x) {
            result.push(y - x);
        } else {
            result.push(y + 26 - x);
        }
    }
    console.log('Distances:', result.join(' '));
}