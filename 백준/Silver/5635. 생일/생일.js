const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let arr = input.slice(1).map((item) => {
  let [name, d, m, y] = item.split(' ');

  return [name, new Date(y, m, d).getTime()];
});

arr = arr.sort((a, b) => b[1] - a[1]);

console.log(arr[0][0]);
console.log(arr[arr.length - 1][0]);