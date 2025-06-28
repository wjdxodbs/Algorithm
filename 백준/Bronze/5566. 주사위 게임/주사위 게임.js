const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = [];
for (let i = 1; i <= N; i++) {
  board[i] = parseInt(input[i]);
}

const dice = [];
for (let i = N + 1; i < N + 1 + M; i++) {
  dice.push(parseInt(input[i]));
}

let position = 1;
let diceCount = 0;

for (let i = 0; i < M; i++) {
  diceCount++;

  position += dice[i];

  if (position >= N) {
    break;
  }

  position += board[position];

  if (position >= N) {
    break;
  }
}

console.log(diceCount);