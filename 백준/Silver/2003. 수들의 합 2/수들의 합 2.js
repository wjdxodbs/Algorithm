const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let sums = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  sums[i] = sums[i - 1] + arr[i - 1];
}

let f = 0;
let e = 1;
let cnt = 0;

while (e <= n) {
  let num = sums[e] - sums[f];

  if (num === m) {
    cnt += 1;
    f += 1;
    e += 1;
  } else if (num > m) {
    f += 1;
  } else {
    e += 1;
  }
}

console.log(cnt);