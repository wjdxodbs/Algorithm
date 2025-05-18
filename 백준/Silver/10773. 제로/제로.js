const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = input.slice(1)

const stack = [];

for (let i = 0; i < arr.length; i++) {
  const num = arr[i]

  if (!!num) {
    stack.push(num)
  } else {
    stack.pop()
  }
}

console.log(stack.reduce((p, c)=>p+c,0))