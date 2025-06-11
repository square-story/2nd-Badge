let obj = { 1: 'soometry', 2: 'geometry', 3: 'solution' }

let length = Object.keys(obj).length

delete obj[length]

console.log(obj) // Output: { 1: 'soometry', 2: 'geometry' }