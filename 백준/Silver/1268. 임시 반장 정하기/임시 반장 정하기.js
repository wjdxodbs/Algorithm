const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const students = [];

for (let i = 1; i <= n; i++) {
  students.push(input[i].split(' ').map(Number));
}

const sameClassCount = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const sameStudents = new Set();

  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    for (let grade = 0; grade < 5; grade++) {
      if (students[i][grade] === students[j][grade]) {
        sameStudents.add(j);
        break;
      }
    }
  }

  sameClassCount[i] = sameStudents.size;
}

let maxCount = Math.max(...sameClassCount);
let leader = sameClassCount.indexOf(maxCount) + 1;

console.log(leader);