const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = [];

for (const line of input) {
  if (line === "") continue;

  let lower = 0,
    upper = 0,
    digit = 0,
    space = 0;

  for (const char of line) {
    if (char >= "a" && char <= "z") lower++;
    else if (char >= "A" && char <= "Z") upper++;
    else if (char >= "0" && char <= "9") digit++;
    else if (char === " ") space++;
  }

  result.push(`${lower} ${upper} ${digit} ${space}`);
}

console.log(result.join("\n"));