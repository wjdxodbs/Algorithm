let result = []

function a(str, r){
    if (r < Number(str)){
        return
    }
    
    result.push(Number(str))
    
    a(str+'5', r)
    a(str+'0', r)
}

function solution(l, r) {
    a('5', r)
    
    let arr =  result.map(Number).filter(item => l <= item && item <= r).sort((a, b) => a-b)
    
    return arr.length ? arr : [-1];
}