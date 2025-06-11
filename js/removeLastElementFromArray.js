let arr = [1, 3, 5, 3, 5, 3, 5, 3]

let popLast = (arr) => {
    let removeValue = arr[arr.length - 1]
    arr.length = arr.length - 1
    return removeValue

}

console.log(popLast(arr))
console.log(popLast(arr))

console.log(arr)

//another method 

arr = arr.filter((_, index) => index < arr.length - 1)

console.log(arr)


//another one

arr = arr.slice(0, -1)

console.log(arr)