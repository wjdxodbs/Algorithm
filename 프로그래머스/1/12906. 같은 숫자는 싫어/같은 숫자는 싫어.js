function solution(arr)
{
    let s = [];
    
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] !== arr[i+1]){
            s.push(arr[i])
        }
    }
    
    return s
}