function solution(s, n) {
    let arr = s.split('');
    let result = arr.map(item=>{
        let num = item.charCodeAt();
        
        if(num >= 97){
            let s = num+n;
            num = s>122?s-26:s
        }else if(num >= 65){
            let s = num+n;
            num = s>90?s-26:s
        }
        
        return String.fromCharCode(num)
    })
    
    return result.join('')
}