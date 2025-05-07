const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const prefix = Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  prefix[i + 1] = arr[i] + prefix[i];
}

let maxNum = -99999999;

for (let i = k; i <= n; i++) {
  if (maxNum < prefix[i] - prefix[i - k]) {
    maxNum = prefix[i] - prefix[i - k];
  }
}

console.log(maxNum);