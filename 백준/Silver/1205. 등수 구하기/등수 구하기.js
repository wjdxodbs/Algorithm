const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, newScore, P] = input[0].split(' ').map(Number);

if (N === 0) {
  console.log(1);
  process.exit(0);
}

const scores = input[1].split(' ').map(Number);

if (N === P && scores[N - 1] >= newScore) {
  console.log(-1);
  process.exit(0);
}

let rank = 1;
for (let i = 0; i < N; i++) {
  if (scores[i] > newScore) {
    rank++;
  } else {
    break;
  }
}

console.log(rank);