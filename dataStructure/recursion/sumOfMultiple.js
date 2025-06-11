let arr = [2, 3, 5, 3, 2, 5, 6, 3]

const sumOfMultipleOfThree = (arr) => {
    console.log(`the arr now : ${arr.join('')} and the arr[0] value is equalto 3 : ${arr[0] % 3 == 0}`)
    if (!arr.length) return 0
    else if (arr[0] % 3 == 0) {
        return arr[0] + sumOfMultipleOfThree(arr.splice(1))
    } else {
        return sumOfMultipleOfThree(arr.splice(1))
    }
}

console.log(sumOfMultipleOfThree(arr))