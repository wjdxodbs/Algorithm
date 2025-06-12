const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, l] = input[0].split(' ');
let arr = input.slice(1);
let obj = {};

arr.forEach((item, idx) => {
  obj[item] = idx;
});

let result = Object.entries(obj)
  .sort((a, b) => a[1] - b[1])
  .map((item) => item[0]);

console.log(result.slice(0, k).join('\n'));