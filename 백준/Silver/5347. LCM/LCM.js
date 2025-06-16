const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arr = Array(n).fill(0);

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  let g = gcd(a, b);
  arr[i - 1] = (a * b) / g;
}

console.log(arr.join('\n'));