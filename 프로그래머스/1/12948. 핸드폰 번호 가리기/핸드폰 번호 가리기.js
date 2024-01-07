function solution(phone_number) {
    return phone_number.slice(0, -4).replace(/\d/g, '*') + phone_number.slice(-4)
}