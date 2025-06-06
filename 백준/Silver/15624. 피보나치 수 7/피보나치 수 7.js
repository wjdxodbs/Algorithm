const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = +input;

const MOD = 1000000007;
const dp = [0, 1];

for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % MOD;
}

console.log(dp[n]);
