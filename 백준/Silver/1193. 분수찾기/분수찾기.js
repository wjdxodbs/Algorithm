const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let line = 1;
let sum = 0;

while (sum + line < input) {
  sum += line;
  line++;
}

let index = input - sum;

let numerator, denominator;
if (line % 2 === 0) {
  numerator = index;
  denominator = line - index + 1;
} else {
  numerator = line - index + 1;
  denominator = index;
}

console.log(`${numerator}/${denominator}`);