function solution(a, b) {
    if (a === b) return a; 
    
    const sum = a + b;
    const difference = (Math.abs(a - b) + 1);
    const count = difference / 2;
    
    return sum * count;
}