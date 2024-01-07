function solution(arr, divisor) {
    const newArr = [];
    arr.forEach((n) => {
        if (n % divisor === 0) newArr.push(n)
    });
    return newArr.length === 0 ? [-1] : newArr.sort((a, b) => a - b);
}