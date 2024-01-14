function solution(n) {
    const su = '수';
    const subak = '수박';
    if (n % 2 !== 0) {
        return [subak.repeat(parseInt(n/2))].join('') + su;
    } else {
        return subak.repeat(n/2);
    }
}