function solution(participant, completion) {
    let map = new Map();
    
    participant.forEach((elm, idx)=>{
        let cnt1 = map.get(elm) || 0;
        map.set(elm, cnt1+1)
        
        let cnt2 = map.get(completion[idx]) || 0;
        map.set(completion[idx], cnt2-1)
    })
    
    for (let [key, value] of map){
        if (value > 0) {
            return key
        }
    }
    
}