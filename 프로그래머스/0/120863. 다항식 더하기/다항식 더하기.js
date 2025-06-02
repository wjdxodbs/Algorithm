function solution(polynomial) {
    const arr = polynomial.split(" + ");
    
    let xNum = 0;
    let num = 0;
    
    arr.forEach((term) => {
        if (term.includes("x")) {
            const coefficient = term.replace("x", "") || "1";
            xNum += parseInt(coefficient, 10);
        } else {
            num += parseInt(term, 10);
        }
    });
    
    let answer = [];
    
    if (xNum) {
        answer.push(`${xNum === 1 ? "" : xNum}x`);
    }
    
    // 상수항이 있는 경우
    if (num) {
        answer.push(num);
    }
    
    return answer.join(" + ");
}