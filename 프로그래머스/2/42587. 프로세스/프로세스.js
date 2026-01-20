function solution(priorities, location) {
    let newPriorities = priorities.map((e, i)=>[i, e]);
    let max = priorities.sort((a, b)=>b-a);
    let head = 0, result = 0, maxIdx = 0;
    
    while (head < newPriorities.length){
        let headElm = newPriorities[head]
        
        if (headElm[1] === max[maxIdx]){
            result += 1;
            maxIdx += 1;
            
            if (headElm[0] === location){
                break
            }
            
        } else {
            newPriorities.push(headElm)
        }
            
        head += 1;
    }
        
    return result;
}