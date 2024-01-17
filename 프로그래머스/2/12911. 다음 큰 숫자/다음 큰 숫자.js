function solution(n) {
    const countOne = (num) => {
        return num.toString(2).match(/1/gi).length;
    }
    
    const one = countOne(n);
    let count = 0;
    let number = n + 1;
    while (count < 1) {
        if (one === countOne(number)) count++;
        else number++;
    }
    return number;
    
    
}