const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const n = +input[idx++];

for (let t = 0; t < n; t++) {
  const p = +input[idx++];
  let maxPrice = -1;
  let answer = "";

  for (let i = 0; i < p; i++) {
    const [price, name] = input[idx++].split(" ");
    if (+price > maxPrice) {
      maxPrice = +price;
      answer = name;
    }
  }
  console.log(answer);
}