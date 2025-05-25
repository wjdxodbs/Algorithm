function func(idx, cnt, len, share){
    let result = 0
    
    if(cnt===share){
        return 1
    }
    
    for(let i = idx; i < len; i++){
        result += func(i+1, cnt+1, len, share)
    }
    
    return result
}

function solution(balls, share) {
    return func(0, 0, balls, share)
}