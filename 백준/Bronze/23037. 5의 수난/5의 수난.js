const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

let sum = 0;
for (let digit of n) {
  sum += Math.pow(Number(digit), 5);
}

console.log(sum);