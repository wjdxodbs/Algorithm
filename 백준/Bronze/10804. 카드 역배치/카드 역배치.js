const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cards = Array.from({ length: 20 }, (_, i) => i + 1);

for (let i = 0; i < 10; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const left = a - 1;
  const right = b - 1;
  const reversed = cards.slice(left, right + 1).reverse();

  for (let j = 0; j < reversed.length; j++) {
    cards[left + j] = reversed[j];
  }
}

console.log(cards.join(" "));