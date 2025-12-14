function solution(arr){
    let s = [];
    
    if (arr[0]===')'){
        return false
    }
    
    for (let elm of arr){
        let l = s.length;
        
        if(!l || !(s[l-1]==='(' && elm===')')){
            s.push(elm)
        } else {
            s.pop()
        }
    }
    
    return !s.length;
}