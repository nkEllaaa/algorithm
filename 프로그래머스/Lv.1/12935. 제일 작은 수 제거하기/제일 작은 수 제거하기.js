function solution(arr) {
    const arr2 = [...arr];
    let minNum = 0;
    if (arr2.length === 1) {
        return [-1]
    } else {
        minNum = (arr2.sort((a, b) => b - a).pop())
        return arr.filter((e) => e !== minNum)
    }
}