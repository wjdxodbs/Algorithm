function solution(citations) {
//     let arr = [...citations].sort((a,b)=>a-b);
//     let l = citations.length;
    
//     for(let i = 0; i < l; i++){
//         let num = l - i;
        
//         if (arr[i] >= num) {
//             return num
//         }
//     }
    
//     return 0
    
    return citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
}