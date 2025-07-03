const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [A, B] = input;

const sequence = [];
for (let i = 1; sequence.length < B; i++) {
  for (let j = 0; j < i; j++) {
    sequence.push(i);
  }
}

let sum = 0;
for (let i = A - 1; i < B; i++) {
  sum += sequence[i];
}

console.log(sum);