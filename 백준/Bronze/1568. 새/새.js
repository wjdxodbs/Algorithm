const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = +input;
let birds = N;
let k = 1;
let time = 0;

while (birds > 0) {
  if (birds < k) {
    k = 1;
  }

  birds -= k;
  k++;
  time++;
}

console.log(time);