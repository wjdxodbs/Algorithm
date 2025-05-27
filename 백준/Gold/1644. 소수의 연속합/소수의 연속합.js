const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let n = Number(input)

let arr = Array.from({ length: n + 1 }, (_, idx) => idx);
arr[0] = 0;
arr[1] = 0;

for (let i = 2; i <= Math.sqrt(n); i++) {
  for (let j = i * 2; j <= n; j += i) {
    arr[j] = 0;
  }
}

arr = arr.filter((item) => item);

let sums = Array.from({ length: arr.length + 1 }, () => 0);
for (let i = 1; i < sums.length; i++) {
  sums[i] = arr[i - 1] + sums[i - 1];
}

let front = 0;
let end = 1;
let cnt = 0;

while (end < sums.length) {
  let num = sums[end] - sums[front];
  if (num === n) {
    cnt += 1;
    front += 1;
    end += 1;
  } else if (num > n) {
    front += 1;
  } else {
    end += 1;
  }
}

console.log(cnt);
