const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = input[0];
const B = input[1];

const minA = A.replace(/6/g, '5');
const minB = B.replace(/6/g, '5');
const min = parseInt(minA) + parseInt(minB);

const maxA = A.replace(/5/g, '6');
const maxB = B.replace(/5/g, '6');
const max = parseInt(maxA) + parseInt(maxB);

console.log(min, max);