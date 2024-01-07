function solution(numbers) {
    return 45 - numbers.reduce((arr, cur) => arr + cur);
}