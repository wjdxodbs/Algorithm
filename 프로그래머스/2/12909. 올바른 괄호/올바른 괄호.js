function solution(s){
    let result = 0;
    
    for (let i = 0; i < s.length; i++){
        let num = s[i] === '(' ? 1 : -1
        
        if (result + num < 0){
            return false
        }
        
        result += num
    }
    
    return result ? false : true
}