const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let n = input[0];
let arr = input.slice(1);

let max = 0;
let cnt = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  if (max < arr[i]) {
    max = arr[i];
    cnt++;
  }
}

console.log(cnt);