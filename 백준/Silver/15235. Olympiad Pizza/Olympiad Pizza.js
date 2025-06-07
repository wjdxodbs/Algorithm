const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let arr = input[1].split(' ').map(Number);

let queue = [];
let result = Array.from({ length: n }, () => 0);

while (!arr.every((item) => item === 0)) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      queue.push(i);
      arr[i] -= 1;
    }
  }
}

arr.forEach((_, idx) => {
  result[idx] = queue.lastIndexOf(idx) + 1;
});

console.log(result.join(' '));