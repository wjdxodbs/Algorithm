const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

function a(mid) {
  let cnt = 0;

  arr.forEach((item) => (cnt += Math.floor(item / mid)));

  return cnt >= n;
}

function b() {
  let front = 1;
  let end = Math.max(...arr);
  let answer = 0;

  mid = Math.floor((front + end) / 2);

  while (front <= end) {
    mid = Math.floor((front + end) / 2);

    if (a(mid)) {
      answer = mid;
      front = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(b());