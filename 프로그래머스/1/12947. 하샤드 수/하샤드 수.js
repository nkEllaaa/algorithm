function solution(x) {
    const digits = x.toString().length;
    let sumRemainder = 0;
    let quotient = x;
    for (let i = 0; i < digits; i++) {
        if (quotient >= 10) {
            sumRemainder += quotient % 10;
            quotient = parseInt(quotient / 10);
        } else sumRemainder += quotient;
    }
    return x % sumRemainder === 0 ? true : false;
}
