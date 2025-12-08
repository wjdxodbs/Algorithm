function solution(nums) {
    let n = nums.length / 2;
    let set = new Set(nums);
    let result = Math.min(n, set.size)
    
    return result
}