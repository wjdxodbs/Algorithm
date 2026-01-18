function solution(arr){
    let result = arr.filter((e, i)=> e !== arr[i+1] )
    
    return result
}