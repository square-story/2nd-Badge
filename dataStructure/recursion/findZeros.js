// find the count of zeros in nested array without using flatten method and global variables

let arr = [2, 3, [43, 3, 5, 0, [4, 3, [0, 4, 0]]]]

function countZeros(arr) {
    return arr.reduce((count, element) => {
        if (Array.isArray(element)) {
            return count + countZeros(element)
        } else if (element === 0) {
            return count + 1
        } else {
            return count
        }
    }, 0)
}

console.log(countZeros(arr)) // Output: 3