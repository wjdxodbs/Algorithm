function solution(priorities, location) {
    let arr = priorities.map((elm, idx)=>({'k':idx===location, 'v': elm}))
    let head1 = 0;
    let head2 = 0;
    
    priorities.sort((a,b)=>b-a);
    
    while(arr.length > head1){
        if(priorities[head2] === arr[head1]['v']){
            head2++
            
            if(arr[head1]['k'] === true){
                break
            }
        } else {
            arr.push(arr[head1])
        }
        
        head1++
    }
    
    return head2
}