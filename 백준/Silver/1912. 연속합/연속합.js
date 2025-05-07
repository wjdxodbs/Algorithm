const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number)

const prefix = Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  prefix[i + 1] = Math.max(prefix[i] + arr[i], arr[i]);
}

console.log(Math.max(...prefix.slice(1)));