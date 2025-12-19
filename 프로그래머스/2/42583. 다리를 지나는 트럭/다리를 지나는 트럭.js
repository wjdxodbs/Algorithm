function solution(bridge_length, weight, truck_weights) {
    let time = bridge_length;
    let bridgeWeight = 0;
    let queue = [];
    let head = 0;
    let idx = 0;
    
    while (idx < truck_weights.length) {
        time++;
        
        if (queue.length - head === bridge_length) {
            bridgeWeight -= queue[head];
            head++;
        }
        
        if (idx < truck_weights.length && bridgeWeight + truck_weights[idx] <= weight) {
            queue.push(truck_weights[idx]);
            bridgeWeight += truck_weights[idx];
            idx++;
        } else {
            queue.push(0);
        }
    }
    
    return time;
}
