const str = 'Malayalam'

function checkPalindrome(str) {
    if (str.length < 1) return true
    str = str.replace(/[^A-Za-z1-9]/g, '').toLowerCase()
    if (str[0] !== str[str.length - 1]) return false
    return checkPalindrome(str.slice(1, -1))
}

console.log(checkPalindrome(str)) // false