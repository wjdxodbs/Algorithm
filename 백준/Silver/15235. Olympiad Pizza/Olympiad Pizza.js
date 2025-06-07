const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let arr = input[1].split(' ').map(Number);
let queue = arr.map((v, i) => ({ id: i, cnt: v }));
let result = Array(n).fill(0);
let front = 0;
let time = 0;

while (front < queue.length) {
  const item = queue[front];
  front++;
  time++;
  item.cnt--;

  if (item.cnt === 0) {
    result[item.id] = time;
  } else {
    queue.push(item);
  }
}

console.log(result.join(' '));