const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let n = +input;

let arr = Array.from({ length: n + 1 }, () => 0);

if (n !== 0) {
  arr[1] = 1;
}

for (let i = 2; i <= n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[n]);