const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [n, k] = input

let arr = Array(n + 1).fill(1);
arr[0] = 0;
arr[1] = 0;
let cnt = 0;

for (let i = 2; i <= n; i++) {
  if (!arr[i]) {
    continue;
  }
  for (let j = i; j <= n; j += i) {
    if (arr[j]) {
      cnt += 1;
      arr[j] = 0;

      if (cnt === k) {
        console.log(j);
        return;
      }
    }
  }
}
