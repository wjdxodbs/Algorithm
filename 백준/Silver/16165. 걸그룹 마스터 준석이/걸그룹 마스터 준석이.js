const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let obj = {};
let s = 1;

for (let i = 0; i < N; i++) {
  let n = +input[s + 1];

  for (let j = s + 2; j <= s + n + 1; j++) {
    obj[input[s]] = (obj[input[s]] || '') + ` ${input[j]}`;
  }

  s += n + 2;
}

let result = [];

for (let i = s; i < input.length; i += 2) {
  if (input[i + 1] === '1') {
    result.push(
      Object.entries(obj).filter((item) => item[1].split(' ').indexOf(input[i]) !== -1)[0][0],
    );
  } else {
    result.push(...obj[input[i]].trim().split(' ').sort());
  }
}

console.log(result.join('\n'));