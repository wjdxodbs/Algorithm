const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

if (n <= 1) {
  console.log(n);
} else {
  let prev2 = 0n;
  let prev1 = 1n;

  for (let i = 2; i <= n; i++) {
    const cur = prev1 + prev2;
    prev2 = prev1;
    prev1 = cur;
  }

  console.log(prev1.toString());
}