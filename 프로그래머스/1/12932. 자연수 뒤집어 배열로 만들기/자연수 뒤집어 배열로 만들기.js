function solution(n) {
    const arr = (n+'').split('')
    const numberArr = arr.map((i) => {
        return i * 1;
    })
    return numberArr.reverse();
}