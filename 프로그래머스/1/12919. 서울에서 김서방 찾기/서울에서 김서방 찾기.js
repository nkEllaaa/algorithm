function solution(seoul) {
    let answer = 0;
    seoul.forEach((n, i) => {
        if (n === 'Kim') {
            answer = i;
        }
    }); 
    return `김서방은 ${answer}에 있다`
}