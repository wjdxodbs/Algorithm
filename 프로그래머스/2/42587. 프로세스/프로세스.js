function solution(priorities, location) {
    let arr = []
    let head1 = 0;
    let head2 = 0;
    let target = String.fromCharCode(location+65)
    
    for (let elm in priorities) {
        arr.push([String.fromCharCode(+elm+65), priorities[elm]])
    }
    
    priorities.sort((a,b)=>b-a);
    
    while(arr.length > head1){
        if(priorities[head2] === arr[head1][1]){
            head2++
            
            if(arr[head1][0] === target){
                break
            }
        } else {
            arr.push(arr[head1])
        }
        
        head1++
    }
    
    return head2
}