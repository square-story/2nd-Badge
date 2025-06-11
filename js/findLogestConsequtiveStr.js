//find longest consecutive substring from string input arrtttgt,output shoudl be ttt
let str = 'arrtttgt'
let start = 0
let end = 1
let index = 0
let arr = []
for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
        if (end == 1) {
            index = i
        }
        ++end
    } else {
        arr.push(str.substr(index, end))
        end = 1
    }
}

let max = arr.reduce((acc, curr) => {
    if (acc.length < curr.length) {
        acc = curr
    }
    return acc
}, '')


console.log(max)