let arr = 'aidsfdjsdewdfjhds'.split('')

let result = 0;
let set = new Set(['a', 'e', 'i', 'o', 'u'])
for (let el of arr) {
    if (set.has(el)) {
        result++
    }
}

console.log(result)