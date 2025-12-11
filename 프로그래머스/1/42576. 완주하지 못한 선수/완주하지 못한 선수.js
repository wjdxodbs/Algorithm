function solution(participant, completion) {
    let map = new Map();
    
    for (let elm of participant){
        if(map.has(elm)){
            map.set(elm, map.get(elm)+1)
        } else {
            map.set(elm, 1)
        }
    }
    
    for (let elm of completion){
        if(map.has(elm)){
            map.set(elm, map.get(elm)-1)
        } 
    }
    
    for (let elm of map){
        if (elm[1] !== 0){
            return elm[0]
        }
    }
}