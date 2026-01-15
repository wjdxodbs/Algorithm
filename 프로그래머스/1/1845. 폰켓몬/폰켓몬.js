function solution(nums) {
    let set = new Set(nums);
    let arrLen = nums.length / 2;
    let setLen = set.size;
    
    return arrLen >= setLen ? setLen : arrLen
}