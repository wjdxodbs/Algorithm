function solution(s) {
    let arr = s.split(' ');
    let result = arr.map(item=>[...item].map((al, idx)=>idx%2?al.toLowerCase():al.toUpperCase()).join(''))
    
    return result.join(' ')
}