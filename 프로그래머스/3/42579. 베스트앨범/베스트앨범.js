function solution(genres, plays) {
    let sumMap = {};
    let elmMap = new Map();
    let result = []
    
    genres.forEach((e, i)=>{
        let elm1 = elmMap.get(e) || []
        let elm2 = sumMap[e] || 0
        
        elm1.push([i, plays[i]])
        
        sumMap[e] = elm2 + plays[i]
        elmMap.set(e, elm1)
    })
    
    let newArr = Object.entries(sumMap).sort((a, b)=> b[1]-a[1]);
    
    newArr.forEach((e, i)=>{
        let elm = elmMap.get(e[0]);
        let len = elm.length;
        elm.sort((a, b)=>b[1]-a[1])
        result.push(...elm.slice(0, len >= 2 ? 2 : len))
    })
    
    return result.map((e)=>e[0])
}