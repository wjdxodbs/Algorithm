const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cnt = 0;

for (let i = n - 2; i >= 0; i--) {
  if (arr[i] >= arr[i + 1]) {
    cnt += arr[i] - (arr[i + 1] - 1);
    arr[i] = arr[i + 1] - 1;
  }
}

console.log(cnt);
