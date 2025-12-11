function solution(phone_book) {
    // 해시맵 생성
    const hash = new Map();
    
    // 모든 전화번호를 해시맵에 저장
    for (const phone of phone_book) {
        hash.set(phone, true);
    }
    
    // 각 전화번호에 대해 접두어 검사
    for (const phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            const prefix = phone.slice(0, i);
            if (hash.has(prefix)) {
                return false;
            }
        }
    }
    
    return true;
}