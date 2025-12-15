function solution(strings, n) {
    let result = [...strings].sort((a, b)=>{
        let c = a[n].localeCompare(b[n]);
        
        if(c){
            return c;
        } else {
            return a.localeCompare(b);
        }
        
    })
    
    return result;
}