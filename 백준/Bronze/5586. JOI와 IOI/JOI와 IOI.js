const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let joi = 0,
  ioi = 0;
for (let i = 0; i + 2 < input.length; i++) {
  const t = input.substring(i, i + 3);
  if (t === "JOI") joi++;
  else if (t === "IOI") ioi++;
}

console.log(`${joi}\n${ioi}`);