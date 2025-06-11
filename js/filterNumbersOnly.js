//filter number only from arr

let arr = [2, 4, 3, 4, '3,3', 3, '32', 3, 2]

console.log(arr.filter(item => typeof item === "number"))