const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const message = input[1];

// 각 문자의 약속된 코드
const codes = {
    'A': '000000',
    'B': '001111', 
    'C': '010011',
    'D': '011100',
    'E': '100110',
    'F': '101001',
    'G': '110101',
    'H': '111010'
};

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function countDifferences(str1, str2) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}

let result = '';

for (let i = 0; i < N; i++) {
    const segment = message.substring(i * 6, (i + 1) * 6);
    let found = false;
    
    for (let letter of letters) {
        const diff = countDifferences(segment, codes[letter]);
        
        if (diff <= 1) {
            result += letter;
            found = true;
            break;
        }
    }
    
    if (!found) {
        console.log(i + 1);
        process.exit(0);
    }
}

console.log(result);