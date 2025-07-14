const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((a, b) => a + b, 0);
const avg = Math.round(sum / 10);

const freq = {};
let mode = input[0];
let maxCount = 0;

input.forEach((num) => {
  freq[num] = (freq[num] || 0) + 1;
  if (freq[num] > maxCount) {
    maxCount = freq[num];
    mode = num;
  }
});

console.log(avg);
console.log(mode);