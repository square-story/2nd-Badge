const str = '123321'

function palindromCheck(str) {
    if (!str.length) return true
    str = str.replace(/[^A-Za-z1-9]/g, '').toLowerCase()
    if (str[0] !== str[str.length - 1]) return false
    return palindromCheck(str.slice(1, -1))
}

console.log(palindromCheck(str)) // true