function solution(numbers) {
  let arr = numbers.split("").map(String);
  let set = new Set();
  let visited = Array(arr.length).fill(false);

  const func1 = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
      
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const func2 = (num) => {
    let a = func1(+num);
    if (a) {
      set.add(num);
    }

    if (num.length === arr.length) {
      return;
    }

    arr.forEach((elm, idx) => {
      if (!visited[idx]) {
        visited[idx] = true;
        func2(num + elm);
        visited[idx] = false;
      }
    });
  };

  arr.forEach((elm, idx) => {
    if (elm !== "0") {
      visited[idx] = true;
      func2(elm);
      visited[idx] = false;
    }
  });

  return set.size;
}