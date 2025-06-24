const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);

const result = N * (N + 1) * (N + 2) / 2;

console.log(result);
