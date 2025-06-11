const obj = {
    some: 1,
    thing: 3,
    want: 4,
    to: 24,
    change: 34
}

for (let el in obj) {
    if (obj[el] & 1) {
        delete obj[el]
    }
}

console.log(obj)