const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [n, g] = input[0].split(' ')
let arr = input.slice(1)

let set = new Set(arr);

let game = {
  Y: 2,
  F: 3,
  O: 4,
};

console.log(Math.floor(set.size / (game[g] - 1)));