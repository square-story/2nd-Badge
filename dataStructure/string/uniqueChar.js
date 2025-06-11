let str = 'afjklfadshiuejdfajkdfhfdafsdfa'

const findUnique = (str) => {
    let count = {}
    for (let el of str) {
        count[el] = (count[el] || 0) + 1
    }
    return Object.entries(count).map((item) => {
        if (item[1] == 1) {
            return item[0]
        }
    }).filter(item => item !== undefined)
}

console.log(findUnique(str))