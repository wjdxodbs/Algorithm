const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [L, P, V] = input[i].split(' ').map(Number);
  const a = Math.floor(V / P);
  const b = V % P;
  const c = a * L + Math.min(b, L);
  console.log(`Case ${i + 1}: ${c}`);
}