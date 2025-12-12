function solution(arr){
    let s = [arr[0]];
    
    for (let i = 1; i < arr.length; i++){
        if(arr[i] !== s[s.length-1]){
            s.push(arr[i])
        }
    }
    
    return s
}