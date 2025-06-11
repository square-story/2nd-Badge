const arr = [2, 2, 4, 5, 3]

const newArr = [...arr, 3, 4, 65, 3]

console.log(newArr)
console.log(arr)

const sumofValues = (...value) => {
    return value.reduce((acc, curr) => acc += curr, 0)
}

console.log(sumofValues(1, 2, 4, 2, 32))