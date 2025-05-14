const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const memo = new Set(input.slice(1, n+1));
const blog = input.slice(n+1, n+m+1)

let result = Array(m).fill(0);

blog.forEach((item, idx) => {
  item.split(',').forEach((elm) => {
    if (memo.has(elm)) {
      memo.delete(elm);
    }
  });
  result[idx] = memo.size;
});

console.log(result.join('\n'));