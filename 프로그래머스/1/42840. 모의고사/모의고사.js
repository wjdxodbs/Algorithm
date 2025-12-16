function solution(answers) {
    const rule = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    const l = answers.length;

    const arr = rule.map((elm) => {
      const num = Math.ceil(l / elm.length);
      const newArr = Array(num).fill(elm).flat();
      return newArr.slice(0, l).filter((e, i) => e === answers[i]).length;
    });

    let max = Math.max(...arr);

    return arr
      .map((elm, idx) => (max === elm ? idx + 1 : null))
      .filter((elm) => elm);
}