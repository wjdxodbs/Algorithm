const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const countries = input.slice(1).map((line) => line.split(" ").map(Number));

const target = countries.find(([num]) => num === K);
const [_, goldK, silverK, bronzeK] = target;

let rank = 1;

for (let i = 0; i < N; i++) {
  const [num, gold, silver, bronze] = countries[i];
  if (
    gold > goldK ||
    (gold === goldK && silver > silverK) ||
    (gold === goldK && silver === silverK && bronze > bronzeK)
  ) {
    rank++;
  }
}

console.log(rank);