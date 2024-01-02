function solution(arr) {
    return  calculateArr(arr);
}

const calculateArr = (arr) => {
    let sumArr = 0;
    arr.forEach(number => sumArr += number);
    const averageNumber = sumArr/arr.length
    return averageNumber;
}