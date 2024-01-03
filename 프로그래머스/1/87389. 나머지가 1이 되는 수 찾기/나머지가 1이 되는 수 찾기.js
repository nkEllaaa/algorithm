function solution(n) {
    return divideN(n);
}

const divideN = (n) => {
    const arr = [];
    for (x = 1; x < n; x++) {
        if(n % x === 1) arr.push(x);
    }
    const answer = arr.sort((a,b)=> a-b)[0];
    return answer;
}
