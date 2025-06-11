class QueueUsingTwoStack {
    constructor() {
        this.input = [];
        this.output = [];
    }
    enqueue(value) {
        this.input.push(value)
    }
    dequeue() {
        if (this.output.length == 0) {
            while (this.input.length !== 0) {
                this.output.push(this.input.pop())
            }
        }
        return this.output.pop()
    }

    peek() {
        if (this.output.length === 0) {
            while (this.input.length !== 0) {
                this.output.push(this.input.pop())
            }
        }
        return this.output[this.output.length - 1]
    }

    display() {
        return [...this.input.slice(), ...this.output.slice().reverse()].join('-->')
    }
}

