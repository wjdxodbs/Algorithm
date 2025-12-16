function solution(sizes) {
    let h = 0;
    let w = 0;
    
    for (let size of sizes){
        const [a, b] = size;
        
        if (a>b){
            h = Math.max(a, h)
            w = Math.max(b, w)
        } else {
            h = Math.max(b, h)
            w = Math.max(a, w)
        }
    }
    
    return h * w
}