function solution(n) {
    const sortNumber = n.toString().split('').sort((a, b) => b - a).map((n) => {
        return n * 1}).join('');
    
    return parseInt(sortNumber);
}