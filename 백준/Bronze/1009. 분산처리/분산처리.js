const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input[0];

let result = Array(input.length - 1);

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const num = a % 10;

  let elm;

  if (num === 0) {
    elm = 10;
  } else if ([1, 5, 6].includes(num)) {
    elm = num;
  } else if ([4, 9].includes(num)) {
    elm = b % 2 === 1 ? num : (num * num) % 10;
  } else {
    const cycle = b % 4 === 0 ? 4 : b % 4;
    elm = Math.pow(num, cycle) % 10;
  }

  result[i - 1] = elm;
}

console.log(result.join('\n'))