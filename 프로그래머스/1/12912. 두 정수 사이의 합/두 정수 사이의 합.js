function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return ((min + max) * (max - min + 1)) / 2;
}