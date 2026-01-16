function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 1; i < phone_book.length; i++){
        let len1 = phone_book[i-1].length;
        let len2 = phone_book[i].length;
        let minLen = Math.min(len1, len2);
        
        if (phone_book[i].slice(0, minLen) === phone_book[i-1].slice(0, minLen)){
            return false
        }
    }
    
    return true
}