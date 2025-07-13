const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = null;

for (let i = 1; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const part1 = input.slice(0, i).split("").reverse().join("");
    const part2 = input.slice(i, j).split("").reverse().join("");
    const part3 = input.slice(j).split("").reverse().join("");
    const candidate = part1 + part2 + part3;
    if (answer === null || candidate < answer) {
      answer = candidate;
    }
  }
}

console.log(answer);