function solution(n)
{
    const numToStr = n +'';
    const strToArr = numToStr.split('')
    
    let sum = 0;
    const answer = strToArr.forEach((i) => {
        sum += i * 1;
    });
    return sum;
}