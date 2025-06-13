const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let [M, N] = input;

const start = Math.ceil(Math.sqrt(M));
const end = Math.floor(Math.sqrt(N));

if (start > end) {
  console.log(-1);
} else {
  let sum = 0;
  for (let k = start; k <= end; k++) {
    sum += k * k;
  }
  console.log(sum);
  console.log(start * start);
}