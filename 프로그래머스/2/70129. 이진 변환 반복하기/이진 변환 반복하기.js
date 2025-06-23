function solution(s) {
  let cnt = [0, 0];

  while (s !== '1') {
    let x = s.replaceAll('0', '');
    cnt[1] += s.length - x.length;
    cnt[0] += 1;
    s = x.length.toString(2);
  }

  return cnt;
}