let arr = [2, 4, 5, 3, 5, 3, 2]

const sumOfArray = (arr) => {
    console.log('the arr now:', arr)
    if (!arr.length) return 0
    return arr[0] + sumOfArray(arr.splice(1))
}

console.log(sumOfArray(arr)) // Expected output: 24