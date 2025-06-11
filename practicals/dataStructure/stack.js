class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    clear() {
        this.items = []
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.join(' -> '))
    }
    reverse() {
        this.items.reverse()
    }
    isPalindrome() {
        let reversed = this.items.slice().reverse()
        return this.items.join('') === reversed.join('')
    }
}


module.exports = Stack