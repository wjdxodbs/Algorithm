const fs = require('fs');
let [n, ...arr] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(x => BigInt(x));

let result = Array(Number(n)).fill("YES");

for (let i = 0; i < Number(n); i++) {
  for (let j = 2n; j <= 1000000n; j++) {
    if (arr[i] % j === 0n) {
      result[i] = "NO";
      break;
    }
  }
}

console.log(result.join("\n"));
