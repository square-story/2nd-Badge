let str = 'kaysay'


function stringReverse(str) {
    return !str.length ? '' : stringReverse(str.slice(1)) + str[0]
}

console.log(stringReverse(str))