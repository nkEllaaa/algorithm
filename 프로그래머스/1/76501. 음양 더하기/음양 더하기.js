function solution(absolutes, signs) {
    const integer = absolutes.map((_, i) => {
        if (signs[i]) return absolutes[i]
        else return absolutes[i] * -1
    });
    
    return integer.reduce((acc, cur) => acc + cur, 0);
}