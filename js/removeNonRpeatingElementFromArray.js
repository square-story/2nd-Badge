let arr = [1, 3, 5, 3, 5, 2, 2, 4, 54, 2]

let count = {}

arr.forEach(num => { count[num] = (count[num] || 0) + 1 })

let nonRepeating = Object.entries(count).filter(item => item[1] !== 1).map(item => Number(item[0]))

console.log(nonRepeating)