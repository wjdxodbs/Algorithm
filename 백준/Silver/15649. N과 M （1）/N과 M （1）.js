const fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const result = [];

function solution(num, str) {
  if (num === m) {
    result.push(str.trim());
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!str.includes(i)) {
      solution(num + 1, str + ` ${i}`);
    }
  }
}

solution(0, "");

console.log(result.join("\n"));