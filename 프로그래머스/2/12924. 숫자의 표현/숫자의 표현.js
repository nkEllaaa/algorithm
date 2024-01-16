function solution(n) {
    let count = 1;
    let sum = 0;
    for (let i = 1; i < n / 2; i++) {
        let number = i;
        sum = 0;
        while (sum < n) {
            sum += number;
            number++;
        }
        if (sum === n) count++;
    }
    return count;
}