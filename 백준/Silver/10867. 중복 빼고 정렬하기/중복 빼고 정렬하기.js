const fs = require('fs');
let [n, arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.split(' ').map(Number)
    
let set = new Set(arr);

console.log(Array.from(set).sort((a, b) => a - b).join(' '));
