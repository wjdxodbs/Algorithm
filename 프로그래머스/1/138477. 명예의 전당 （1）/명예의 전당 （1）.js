function solution(k, score) {
  let arr = [];
  let result = Array(score.length);

  score.forEach((item, idx) => {
    arr.push(item);
    arr.sort((a, b) => b - a);

    if (arr.length > k) {
      arr.pop();
    }

    result[idx] = arr[arr.length - 1];
  });

  return result;
}