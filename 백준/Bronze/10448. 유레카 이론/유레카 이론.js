const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
const cases = input.slice(1).map(Number);

const triangles = [];
for (let n = 1; n <= 44; n++) {
    triangles.push((n * (n + 1)) / 2);
}

for (let idx = 0; idx < T; idx++) {
    const K = cases[idx];
    let found = 0;

    for (let i = 0; i < triangles.length; i++) {
        for (let j = 0; j < triangles.length; j++) {
            for (let k = 0; k < triangles.length; k++) {
                if (triangles[i] + triangles[j] + triangles[k] === K) {
                    found = 1;
                    break;
                }
            }
            if (found) break;
        }
        if (found) break;
    }
    console.log(found);
}