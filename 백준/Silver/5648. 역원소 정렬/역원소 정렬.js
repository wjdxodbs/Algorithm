const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const n = Number(input[0]);
const numbers = input
  .slice(1, n + 1)
  .map((str) => BigInt(str.split("").reverse().join("")));

numbers.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

const result = numbers.map((num) => num.toString());

console.log(result.join("\n"));