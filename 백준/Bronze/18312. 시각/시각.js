const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, k] = input;
let count = 0;
const target = k.toString();

for (let h = 0; h <= n; h++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      const time = `${h.toString().padStart(2, "0")}${m
        .toString()
        .padStart(2, "0")}${s.toString().padStart(2, "0")}`;
      if (time.includes(target)) {
        count++;
      }
    }
  }
}

console.log(count);