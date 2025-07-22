const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const trees = input.slice(1).map(Number);

let gaps = [];
for (let i = 1; i < N; i++) {
    gaps.push(trees[i] - trees[i - 1]);
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

let wholeGCD = gaps[0];
for (let i = 1; i < gaps.length; i++) {
    wholeGCD = gcd(wholeGCD, gaps[i]);
}

const totalCount = (trees[N - 1] - trees[0]) / wholeGCD + 1;

console.log(totalCount - N);