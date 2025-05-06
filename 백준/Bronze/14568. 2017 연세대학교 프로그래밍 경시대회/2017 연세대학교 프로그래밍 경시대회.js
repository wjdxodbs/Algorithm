const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString());

let cnt = 0;

for (let i = 2; i <= n - 3; i += 2) {
  for (let j = 1; j < Math.floor((n - i) / 2); j++) {
    cnt += 1;
  }
}

console.log(cnt);