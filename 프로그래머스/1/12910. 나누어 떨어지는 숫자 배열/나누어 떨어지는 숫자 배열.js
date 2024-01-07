function solution(arr, divisor) {
    const newArr = [];
    arr.forEach((n) => {
        if (n % divisor === 0) newArr.push(n)
    });
    if (newArr.length === 0) newArr.push(-1);
    else newArr.sort((a, b) => a - b);
    return newArr;
}