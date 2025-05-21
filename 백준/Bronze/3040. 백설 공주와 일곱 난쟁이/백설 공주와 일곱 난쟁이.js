const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const total = input.reduce((a, b) => a + b, 0);
const over = total - 100;

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] + input[j] === over) {
            input.splice(j, 1);
            input.splice(i, 1); 
            console.log(input.join('\n'));
            return;
        }
    }
}
