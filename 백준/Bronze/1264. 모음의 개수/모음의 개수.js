const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

for (const line of input) {
  if (line === "#") break;

  let count = 0;
  for (const char of line) {
    if (vowels.has(char)) count++;
  }

  console.log(count);
}
