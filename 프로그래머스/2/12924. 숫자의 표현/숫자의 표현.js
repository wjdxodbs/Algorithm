function solution(n) {
  let arr = Array(n + 1).fill(0);
  let cnt = 0;
  let h = 0;
  let t = 1;

  for (let i = 1; i <= n; i++) {
    arr[i] = arr[i - 1] + i;
  }

  while (t <= n) {
    if (arr[t] - arr[h] === n) {
      cnt += 1;
      h += 1;
      t += 1;
    } else if (arr[t] - arr[h] < n) {
      t += 1;
    } else {
      h += 1;
    }
  }

  return cnt;
}