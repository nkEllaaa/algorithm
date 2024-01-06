function solution(a, b) {
    if (a === b) return a; 
    
    const sum = a + b;
    const difference = (Math.abs(a - b));
    const count = parseInt(difference / 2);
    
    if (difference % 2 === 0) {
        return sum * count + sum / 2;
    } else if (difference % 2 !== 0) {
        return sum * (count + 1);
    }
}