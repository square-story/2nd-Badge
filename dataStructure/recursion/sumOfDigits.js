function sumOfDigits(number) {
    if (!number) return 0
    let lastDigit = number % 10
    return sumOfDigits(Math.floor(number / 10)) + lastDigit
}

console.log(sumOfDigits(1234))