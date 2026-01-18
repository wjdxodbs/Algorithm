function solution(progresses, speeds) {
    let newProgresses = progresses.map((e, i)=>{
        let a = 100-e;
        let day = Math.ceil(a / speeds[i])
        return day
    })
    
    let elm = 1;
    let maxNum = newProgresses[0];
    let result = [];
    
    for (let i = 1; i < newProgresses.length; i++){
        if (maxNum < newProgresses[i]){
            result.push(elm)
            maxNum = newProgresses[i]
            elm = 1;
            continue;
        }
        
        elm += 1
    }
    
    result.push(elm)
    
    return result;
}