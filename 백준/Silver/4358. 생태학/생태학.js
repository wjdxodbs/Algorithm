const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let obj = {};

input.forEach((item) => {
  obj[item] = (obj[item] || 0) + 1;
});

let total = input.length;

let result = Object.entries(obj).map(
  (item) => `${item[0]} ${((item[1] / total) * 100).toFixed(4)}`,
);

console.log(result.sort().join('\n'));