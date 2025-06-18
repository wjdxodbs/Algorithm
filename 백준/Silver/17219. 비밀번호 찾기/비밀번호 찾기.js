const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arr1 = input.slice(1, N + 1);
let arr2 = input.slice(N + 1);

let obj = {};

arr1.forEach((item) => {
  let [k, v] = item.split(' ');
  obj[k] = v;
});

let result = Array(M);

arr2.forEach((item, idx) => {
  result[idx] = obj[item];
});

console.log(result.join('\n'));