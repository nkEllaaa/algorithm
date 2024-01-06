function solution(n) {
    const sortNumber = n.toString().split('').sort((a, b) => b - a).join('') * 1;
    return sortNumber;
}