const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let totalLeftover = 0;

for (let i = 1; i <= N; i++) {
  const [students, apples] = input[i].split(" ").map(Number);
  totalLeftover += apples % students;
}

console.log(totalLeftover);