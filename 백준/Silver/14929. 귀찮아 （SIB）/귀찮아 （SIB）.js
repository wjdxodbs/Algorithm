const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let answer = 0;
let suffixSum = 0;

for (let i = n - 1; i > 0; i--) {
    suffixSum += arr[i];
    answer += arr[i - 1] * suffixSum;
}

console.log(answer);