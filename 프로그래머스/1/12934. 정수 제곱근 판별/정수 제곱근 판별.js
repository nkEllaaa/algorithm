function solution(n) {
    let x = 0;
    while(++x <= n / x ) {
        if (n / x === x) {
            return (x + 1) ** 2
        }
    }
    return -1
}