const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const result = (BigInt(N) * BigInt(N - 1) * BigInt(N + 1)) / 2n;
console.log(result.toString());