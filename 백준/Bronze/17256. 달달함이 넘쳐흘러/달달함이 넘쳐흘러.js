const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const a = input[0].split(' ').map(Number);
const c = input[1].split(' ').map(Number);

const bx = c[0] - a[2];
const by = c[1] / a[1];
const bz = c[2] - a[0];

console.log(`${bx} ${by} ${bz}`);
