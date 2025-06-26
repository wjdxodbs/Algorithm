const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const M = parseInt(input[0]);
let position = 1;

for (let i = 1; i <= M; i++) {
  const [X, Y] = input[i].split(' ').map(Number);

  if (position === X) {
    position = Y;
  } else if (position === Y) {
    position = X;
  }
}

console.log(position);