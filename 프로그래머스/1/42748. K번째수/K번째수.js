function solution(array, commands) {
    let result = new Array(commands.length).fill(0);
    
    for (let idx = 0; idx < commands.length; idx++){
        let [i, j, k] = commands[idx];
        let arr = array.slice(i-1, j);
        arr.sort((a,b)=>a-b)
        result[idx] = arr[k-1]
    }
    
    return result
}