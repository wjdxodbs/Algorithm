const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [str1, str2] = input;
let obj1 = {};
let obj2 = {};

for (let elm of str1) {
  obj1[elm] = obj1[elm] ? obj1[elm] + 1 : 1;
}

for (let elm of str2) {
  obj2[elm] = obj2[elm] ? obj2[elm] + 1 : 1;
}

let set = new Set([...str1, ...str2]);

let cnt = 0;

for (const elm of set) {
  let num1 = obj1[elm] || 0;
  let num2 = obj2[elm] || 0;

  cnt += Math.abs(num1 - num2);
}

console.log(cnt);