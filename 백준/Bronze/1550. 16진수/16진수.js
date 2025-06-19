const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const result = parseInt(input, 16);
console.log(result);