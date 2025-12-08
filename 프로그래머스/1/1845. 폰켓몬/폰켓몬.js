function solution(nums) {
    let n = nums.length / 2;
    let set = new Set(nums);
    let setN = [...set.values()].length;
    
    return n > setN ? setN : n;
}