let arr = [0, [0, 7, [9, 7], 0, [[0, 8]]]]
//do not use the golbal variable and flat function

const flatten = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flatten(curr))
        } else {
            return acc.concat(curr)
        }
    }, [])
}

console.log(flatten(arr))