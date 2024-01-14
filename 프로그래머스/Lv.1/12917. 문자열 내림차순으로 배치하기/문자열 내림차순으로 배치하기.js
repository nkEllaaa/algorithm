function solution(s) {
    const sToArr = s.split('');
    const upper = s.toUpperCase().split('');
    let char1 = '';
    let char2 = '';
    
    sToArr.forEach((v, i) => {
        if (v !== upper[i]) {
            char1 += v;
        } else {
            char2 += v;
        }
    });
    
    return char1.split('').sort((a, b) => b.localeCompare(a)).join('') + char2.split('').sort((a, b) => b.localeCompare(a)).join('');
}
