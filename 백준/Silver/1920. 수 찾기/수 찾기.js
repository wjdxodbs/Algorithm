const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arr1 = input[1].split(' ').map(Number);
let m = +input[2];
let arr2 = input[3].split(' ').map(Number);

arr1.sort((a, b) => a - b);

let result = Array(m).fill(0);

arr2.forEach((item, idx) => {
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (arr1[m] === item) {
      result[idx] = 1;
      break;
    }

    if (arr1[m] > item) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
});

console.log(result.join('\n'));