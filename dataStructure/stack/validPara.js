const Stack = require('./stackUsingArray')

const validPara = (word) => {
    let stack = new Stack()
    let match = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (let el of word) {
        if (el === '{' || el === '(' || el === '[') {
            stack.push(el)
        } else if (el === '}' || el === ')' || el === ']') {
            if (stack.isEmpty() || stack.pop() !== match[el]) {
                return false
            }
        }
    }
    return stack.isEmpty()
}


console.log(validPara("()[]{}")) // true

console.log(validPara("({)}")) // false

console.log(validPara("((()))")) // true

