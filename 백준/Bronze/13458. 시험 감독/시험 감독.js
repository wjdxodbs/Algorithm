const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);
const [B, C] = input[2].split(' ').map(Number);

let total = 0;

A.forEach(item => {
    total += 1;
    const remain = item - B;
    if (remain > 0) {
        total += Math.ceil(remain / C);
    }
});

console.log(total);