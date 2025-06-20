const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const cnt = new Array(26).fill(0);

for (let char of input) {
  if (char >= 'a' && char <= 'z') {
    cnt[char.charCodeAt(0) - 97]++;
  }
}

const maxCnt = Math.max(...cnt);

let result = '';
for (let i = 0; i < 26; i++) {
  if (cnt[i] === maxCnt) {
    result += String.fromCharCode(i + 97);
  }
}

console.log(result);