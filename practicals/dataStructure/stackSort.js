const Stack = require('./stack')


//example usage

let arr = [2, 4, 5, 2, 34, 2, 5, 6]

const stack = new Stack()

arr.forEach(item => stack.push(item))

function sortStack(stack) {
    let temp = new Stack()
    while (!stack.isEmpty()) {
        let curr = stack.pop()
        while (!temp.isEmpty() && temp.peek() < curr) {
            stack.push(temp.pop())
        }
        temp.push(curr)
    }
    while (!temp.isEmpty()) {
        stack.push(temp.pop())
    }
}

sortStack(stack)
stack.print()