const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let [a, b, c] = input;

function modPow(base, exp, mod) {
    base = BigInt(base);
    exp = BigInt(exp);
    mod = BigInt(mod);
    
    if (exp === 0n) return 1n;
    
    let half = modPow(base, exp / 2n, mod);
    half = (half * half) % mod;
    
    if (exp % 2n === 1n) {
        half = (half * base) % mod;
    }
    
    return half;
}

console.log(Number(modPow(a, b, c)));
