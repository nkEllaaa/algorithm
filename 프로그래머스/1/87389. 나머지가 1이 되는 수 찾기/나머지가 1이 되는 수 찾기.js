function solution(n) {
    return divideN(n);
}

const divideN = (n) => {
    let x = 1;
    while(x++) {
        if (n % x === 1) return x;
    }
}
