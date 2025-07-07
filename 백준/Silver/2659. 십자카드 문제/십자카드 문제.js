const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function getClockNum(arr) {
  let min = 10000;
  for (let i = 0; i < 4; i++) {
    let num =
      arr[i] * 1000 +
      arr[(i + 1) % 4] * 100 +
      arr[(i + 2) % 4] * 10 +
      arr[(i + 3) % 4];
    if (num < min) min = num;
  }
  return min;
}

const card = input.map(Number);
const myClockNum = getClockNum(card);

const clockSet = new Set();
for (let n = 1111; n <= 9999; n++) {
  const str = n.toString();
  if (str.includes("0")) continue; // 0이 포함된 수는 제외
  const arr = str.split("").map(Number);
  const clockNum = getClockNum(arr);
  clockSet.add(clockNum);
}

const clockArr = Array.from(clockSet).sort((a, b) => a - b);
const answer = clockArr.indexOf(myClockNum) + 1; // 1-based index

console.log(answer);