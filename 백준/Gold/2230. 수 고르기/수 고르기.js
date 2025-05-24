const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);
let min_num = Infinity;
let front = 0,
  end = 0;

while (front < n && end < n) {
  let diff = arr[end] - arr[front];

  if (diff < m) {
    end += 1;
  } else {
    min_num = Math.min(min_num, diff);
    front += 1;
  }
}

console.log(min_num);
