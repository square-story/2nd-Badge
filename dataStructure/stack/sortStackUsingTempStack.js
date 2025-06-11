class Stack {
    constructor() {
        this.items = []
    }
    push(value) {
        this.items.push(value)
    }
    isEmpty() {
        return this.items.length === 0
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    print() {
        console.log([...this.items].join('-->'))
    }
}




const stack = new Stack()

const arr = [32, 42, 4, 2, 54, 2, 46]

arr.forEach(item => stack.push(item))

console.log('before sort')
stack.print()

console.log('after sort')
stackSort(stack)
stack.print()


function stackSort(stack) {
    let temp = new Stack()
    while (!stack.isEmpty()) {
        let curr = stack.pop()
        while (!temp.isEmpty() && curr > temp.peek()) {
            stack.push(temp.pop())
        }
        temp.push(curr)
    }
    while (!temp.isEmpty()) {
        stack.push(temp.pop())
    }
}