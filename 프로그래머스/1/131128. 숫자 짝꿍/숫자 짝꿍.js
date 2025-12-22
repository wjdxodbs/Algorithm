function solution(X, Y) {
    let map1 = new Map();
    let map2 = new Map();
    let result = [];

    for (let elm of X) {
      map1.set(elm, (map1.get(elm) || 0) + 1);
    }

    for (let elm of Y) {
      map2.set(elm, (map2.get(elm) || 0) + 1);
    }

    for (let i = 9; i >= 0; i--) {
      const key = String(i);
      if (map1.has(key) && map2.has(key)) {
        const count = Math.min(map1.get(key), map2.get(key));
          
            for (let j = 0; j < count; j++) {
                result.push(key);
            }
      }
    }

    if (!result.length) return "-1";
    if (result[0] === "0") return "0";

    return result.join("");
  }