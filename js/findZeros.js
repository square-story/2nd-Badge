let arr = [4, 4, 6, 3, 0, 2, 5, 0, [30, 50, 0, 5, 0, [0, 3, 4]]]

function findZeroCount(arr) {
    for (let el of arr) {
        if (Array.isArray(el)) {
            findZeroCount(el)
        } else {
            if (el == 0) {
                count++
            }
        }
    }
}

let count = 0
findZeroCount(arr)
console.log(count)