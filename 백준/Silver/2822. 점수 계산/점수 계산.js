const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const scoresWithIndex = input.map((score, index) => ({ score, index: index + 1 }));

const topFive = scoresWithIndex.sort((a, b) => b.score - a.score).slice(0, 5);

const totalScore = topFive.reduce((sum, item) => sum + item.score, 0);

const indices = topFive.map(item => item.index).sort((a, b) => a - b);

console.log(totalScore);
console.log(indices.join(" "));
