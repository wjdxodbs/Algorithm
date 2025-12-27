function solution(a, b, n) {
    let answer = 0;
    let bottles = n;
    
    while (bottles >= a) {
        const exchange = Math.floor(bottles / a);
        const newCola = exchange * b;
        answer += newCola;
        bottles = (bottles % a) + newCola;
    }
    
    return answer;
}
