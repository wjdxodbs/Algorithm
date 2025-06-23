const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const room = [];

for (let i = 1; i <= N; i++) {
    room.push(input[i]);
}

let horizontal = 0;
let vertical = 0;

for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (room[i][j] === '.') {
            count++;
        } else {
            if (count >= 2) {
                horizontal++;
            }
            count = 0;
        }
    }
    if (count >= 2) {
        horizontal++;
    }
}

for (let j = 0; j < N; j++) {
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (room[i][j] === '.') {
            count++;
        } else {
            if (count >= 2) {
                vertical++;
            }
            count = 0;
        }
    }
    if (count >= 2) {
        vertical++;
    }
}

console.log(horizontal, vertical);
