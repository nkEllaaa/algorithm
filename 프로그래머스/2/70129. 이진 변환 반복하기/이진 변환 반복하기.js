function solution(s) {
    let zeroCount = 0;
    let oneCount = 0;
    let count = 0;
    
    while(s !== '1') {
        oneCount = 0;
        s.split('').forEach((v) => {
            if (v === '0') ++zeroCount;
            else ++oneCount;
        });
        
        s = oneCount.toString(2);
        count++;
    }
    return ([count, zeroCount])
}