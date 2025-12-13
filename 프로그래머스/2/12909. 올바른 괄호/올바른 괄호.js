function solution(s){
    let stack = []
    
    s.split('').forEach(item=>{
        if(stack.length===0){
            stack.push(item)
            return
        }
        
        if(item===')' && stack.at(-1)==='('){
            stack.pop()
        } else {
            stack.push(item)
        }
    })
    
    return stack.length===0
}