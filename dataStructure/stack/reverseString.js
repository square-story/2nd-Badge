const Stack = require('./stackUsingArray')

let stack = new Stack()

let word = 'sadik'

word.split('').forEach(item => stack.push(item))

let reverse = ''

stack.print()

for (let i = 0; i < word.length; i++) {
    reverse += stack.pop()
}


console.log(reverse)
