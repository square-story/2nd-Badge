let arr = [2, 4, 3, 54, 2, 4, 5, 3, 4, 234, 43, 23]
const isPrime = (value) => {
    if (value <= 1) return false
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i == 0) {
            return false
        }
    }
    return true
}

const sumOfPrime = (arr) => {
    return arr
        .filter((item) => isPrime(item))
        .reduce((acc, curr) => acc + curr, 0)
}

console.log(sumOfPrime(arr))