const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let n = input[0];
let arr = input.slice(1)

let cnt = 0;
let stack = [];

for (let i = 0; i < n; i++) {
  while (stack.length && stack[stack.length - 1] <= arr[i]) {
    stack.pop();
  }

  cnt += stack.length;
    
  stack.push(arr[i]);
}

console.log(cnt);