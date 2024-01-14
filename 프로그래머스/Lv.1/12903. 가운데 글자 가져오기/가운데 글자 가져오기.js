function solution(s) {
    const middle = parseInt(s.length / 2);
    if (s.length % 2 !== 0) {
        return s[middle].toString();
    } else {
        return [s[middle -1], s[middle]].join('')
    }
    
}