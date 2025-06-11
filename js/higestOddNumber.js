let arr = [2, 4, 2, 4, 3, 5, 56, 3, 23, 4, 2, 43, 123, 124]

const higestOdd = (arr) => {
    return arr.reduce((acc, curr) => {
        if (curr & 1 && curr > acc) {
            acc = curr
        }
        return acc
    }, 0)
}
console.log(higestOdd(arr))