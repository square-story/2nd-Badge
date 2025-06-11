class StackUsingTwoQueue {
    constructor() {
        this.input = []
        this.output = []
    }
    push(value) {
        this.input.push(value)
    }
    pop() {
        if (this.input.length === 0) {
            console.log('stack underFlow')
        }
        while (this.input.length > 1) {
            this.output.push(this.input.shift())
        }
        let removeValue = this.input.shift()
        while (this.output.length) {
            this.input.push(this.output.shift())
        }
        return removeValue
    }
    peek() {
        if (!this.output.length) {
            while (this.input.length) {
                this.output.push(this.input.shift())
            }
        }
        return this.output[0]
    }
    print() {
        return [...this.input.slice(), ...this.output.slice().reverse()].join('-->')
    }
}

const stack = new StackUsingTwoQueue()

let arr = [13, 4, 3, 34, 34, 35, 8, 4]

arr.forEach(item => stack.push(item))


console.log(stack.print())
stack.pop()
console.log(stack.print())