function solution(clothes) {
    let obj = {};
    
    clothes.forEach((e, i)=>{
        let cnt = obj[e[1]] || 0;
        obj[e[1]] = cnt + 1
    })
    
    return Object.values(obj).reduce((p, c) => p*(c+1), 1) - 1
}