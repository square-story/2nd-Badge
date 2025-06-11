class Stack {
    constructor() {
        this.items = []
        this.size = 0;
    }
    isEmpty() {
        return this.size == 0
    }
    getSize() {
        return this.size
    }
    push(element) {
        if (this.size >= 10) {
            console.log('stack overFlow')
        } else {
            this.items.push(element)
            this.size++
        }
    }
    pop() {
        if (this.isEmpty()) {
            console.log('stack underflow')
        }
        this.size--
        return this.items.pop()
    }

    peek() {
        return this.items[this.getSize() - 1]
    }

    print() {
        if (this.isEmpty()) {
            console.log('stack is empty')
        }
        console.log(this.items.toString())
    }

}

module.exports = Stack;


