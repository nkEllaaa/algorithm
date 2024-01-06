function solution(absolutes, signs) {
    let answer = 0; 
    const integer = absolutes.map((v, i) => {
        if (signs[i]) answer += v
        else answer += v * -1
    });
    
    return answer;
}