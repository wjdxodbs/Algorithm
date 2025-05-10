function solution(arr, queries) {
    let n = queries.length
    
    var answer = Array(n).fill(0);
    
    for (let i = 0; i < n; i++ ){
        let [s, e, k] = queries[i]
        let big = arr.slice(s, e+1).filter(i => k < i);
        
        
        answer[i] = big.length ? Math.min(...big) : -1
        
        
    }
    
    return answer;
}