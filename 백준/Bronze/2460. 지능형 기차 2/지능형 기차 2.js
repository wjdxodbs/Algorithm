const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let current = 0;
let maxPeople = 0;

for (let i = 0; i < 10; i++) {
  const [out, inCount] = input[i].split(" ").map(Number);
  current = current - out + inCount;
  if (current > maxPeople) {
    maxPeople = current;
  }
}

console.log(maxPeople);