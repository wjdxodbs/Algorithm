const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let maxScore = 0;
let winner = 0;

for (let i = 0; i < 5; i++) {
    const scores = input[i].split(' ').map(Number);
    const total = scores.reduce((a, b) => a + b, 0);
    if (total > maxScore) {
        maxScore = total;
        winner = i + 1; 
    }
}

console.log(winner, maxScore);