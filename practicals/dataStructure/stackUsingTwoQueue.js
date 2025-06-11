class Queue {
    constructor() {
        this.item = []
    }
    isEmpty() {
        return this.item.length === 0
    }
    getSize() {
        return this.item.length
    }
    enqueue(value) {
        this.item.push(value)
    }
    dequeue() {
        return this.item.shift()
    }
    peek() {
        return this.item[0]
    }
}

