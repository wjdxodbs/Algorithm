const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = [];
let result = [];
const obj = {
  push: (i) => stack.push(i),
  empty: () => {
    let n = stack.length;
    return +(n === 0);
  },
  pop: () => (obj.empty() ? -1 : stack.pop()),
  top: () => (obj.empty() ? -1 : stack[stack.length - 1]),
  size: () => stack.length,
};

for (let i = 1; i < input.length; i++) {
  let elm = input[i].split(" ");

  if (elm[0] === "push") {
    obj[elm[0]](elm[1]);
  } else {
    result.push(obj[elm[0]]())
  }
}

console.log(result.join('\n'))