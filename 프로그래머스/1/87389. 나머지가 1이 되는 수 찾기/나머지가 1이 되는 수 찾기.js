function solution(n) {
    let s = n%2?2:3
    
    for(let i = s; i<=n-1; i+=2){
        if (n%i===1){
            return i
        }
    }
}