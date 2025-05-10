const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const arr = Array.from({ length: n }, (_, i) => i + 1);
const result = [];
let index = 0;

while (arr.length) {
  index = (index + k - 1) % arr.length;
  result.push(arr.splice(index, 1)[0]);
}

console.log(`<${result.join(", ")}>`);