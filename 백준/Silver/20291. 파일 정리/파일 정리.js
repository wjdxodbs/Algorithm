const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.slice(1)

let obj = {};

let brr = arr.map((item) => item.split(".")[1]);
brr.forEach((item) => {
  obj[item] ? (obj[item] += 1) : (obj[item] = 1);
});

let result = Object.entries(obj).sort();

console.log(result.map((item) => item.join(" ")).join("\n"));
