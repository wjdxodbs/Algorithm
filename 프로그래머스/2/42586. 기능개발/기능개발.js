function solution(progresses, speeds) {
    let arr = progresses.map((elm, idx) => Math.ceil((100-elm)/speeds[idx]))
    let result = [1]
    let spot = arr[0]
    
    
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > spot){
            result.push(1)
            spot = arr[i]
        } else {
            result[result.length-1] += 1
        }
    }
    
    return result;
}