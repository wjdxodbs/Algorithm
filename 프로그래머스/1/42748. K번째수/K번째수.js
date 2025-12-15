function solution(array, commands) {
    return commands.map((command)=>{
        let [i, j, k] = command;
        let arr = array.slice(i-1, j).sort((a, b)=>a-b);
        
        return arr[k-1]
    })
}