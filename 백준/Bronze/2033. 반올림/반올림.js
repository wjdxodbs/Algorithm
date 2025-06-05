const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let num = +input;
let t = 10;

while (num > t) {
    const remainder = num % t;
    
    if (remainder >= t / 2) {
        num += t - remainder;
    } else {
        num -= remainder;
    }
    
    t *= 10;
}

console.log(num)