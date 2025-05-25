const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);;


let sums = Array.from({ length: n + 1 }, () => 0);

arr.forEach((item, idx) => {
  sums[idx + 1] = sums[idx] + item;
});

let min_len = Infinity;
let front = 0,
  end = 1;

while (end <= n) {
  let num = sums[end] - sums[front];

  if (num >= m) {
    min_len = Math.min(min_len, end - front);
    front += 1;
  } else {
    end += 1;
  }
}

console.log(min_len === Infinity ? 0 : min_len);