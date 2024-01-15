function solution(A,B){
    const sortA = A.sort((a, b) => a - b);
    const sortB = B.sort((a, b) => b - a);
    let answer = 0;
    sortA.forEach((v, i) => answer += v * sortB[i])
    return answer;
}