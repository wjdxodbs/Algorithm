function solution(arr)
{
    let s = [];
    
    for(let elm of arr){
        let l = s.length;
        
        if(!l || s[l-1] !== elm){
            s.push(elm)
        }
    }
    
    return s
}