function solution(my_strings, parts) {
    let result = ''
    my_strings.forEach((item, idx)=>{
        result += item.slice(parts[idx][0], parts[idx][1]+1)
    })
    
    return result;
}