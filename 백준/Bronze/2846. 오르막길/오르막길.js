const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let maxUp = 0;
let currentUp = 0;

for (let i = 1; i < N; i++) {
  if (arr[i] > arr[i - 1]) {
    currentUp += arr[i] - arr[i - 1];
    if (currentUp > maxUp) maxUp = currentUp;
  } else {
    currentUp = 0;
  }
}

console.log(maxUp);