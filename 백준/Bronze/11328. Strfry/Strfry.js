const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = +input[0];
let result = [];

for (let i = 1; i <= n; i++) {
  let [str1, str2] = input[i].split(' ');
  let sorted1 = [...str1].sort().join('');
  let sorted2 = [...str2].sort().join('');
  
  result.push(sorted1 === sorted2 ? 'Possible' : 'Impossible');
}

console.log(result.join('\n'));
