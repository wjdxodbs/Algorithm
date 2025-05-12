const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
let arr = []

for (let i = 1; i <= T; i++) {
  const [idx, str] = input[i].split(' ');
  const deleteIndex = Number(idx) - 1;
  const result = str.slice(0, deleteIndex) + str.slice(deleteIndex + 1);
  arr.push(result)
}

console.log(arr.join('\n'))
