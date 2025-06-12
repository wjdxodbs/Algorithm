const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, l] = input[0].split(' ');
let arr = input.slice(1);

const set = new Set();
arr.forEach(id => {
  if (set.has(id)) set.delete(id);
  set.add(id);
});

console.log(Array.from(set).slice(0, k).join('\n'));
