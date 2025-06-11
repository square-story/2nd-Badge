let str = '238malaYalam832'

let isPalindrom = (str) => {
    str = str.replace(/[^A-Za-z1-9]/g, '').toLowerCase()
    let reversed = str.split('')
    for (let i = 0; i < Math.floor(reversed.length / 2); i++) {
        [reversed[i], reversed[reversed.length - 1 - i]] = [reversed[reversed.length - i - 1], reversed[i]]
    }
    return reversed.join('') === str
}

console.log(isPalindrom(str))