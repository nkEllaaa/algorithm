function solution(s){
    const arr = s.split('');

    let count = 0;
    arr.forEach((i) => {
        if (i.toLowerCase() === 'p') { 
            count--; 
        } else if (i.toLowerCase() === 'y') {
            count++;
        }
    })
    return count === 0;
}