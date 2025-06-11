let str = 'sadiksaass'

const removeChar = (str, char) => {
    //if the string is empty it will return the empty string
    if (!str.length) return ''
    //if the char[0] === target then it will skip the char and remaining char want to check
    if (str[0] === char) {
        return removeChar(str.slice(1), char)
    } else {
        //will check the other char including and proceeded to next
        return str[0] + removeChar(str.slice(1), char)
    }
}

console.log(removeChar(str, 'a')) // output: sdik