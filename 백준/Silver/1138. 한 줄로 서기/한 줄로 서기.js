const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = +input[0]
let arr = input[1].split(' ').map(Number)
let result = Array(n).fill(null);

for (let i = 0; i < arr.length; i++) {
  let cnt = 0;
  let idx = 0;

  while (true) {
    if (cnt === arr[i] && !result[idx]) {
      result[idx] = i + 1;
      break;
    }

    if (!result[idx]) {
      cnt += 1;
    }

    idx += 1;
  }
}

console.log(result.join(" "));