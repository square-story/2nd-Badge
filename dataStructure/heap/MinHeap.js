class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    getLeftChildren(index) {
        return 2 * index + 1
    }
    getRightChildren(index) {
        return 2 * index + 2
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    insertValue(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index)
        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.heapifyUp(parentIndex)
        }
    }
    getMinimum() {
        if (!this.heap.length) {
            return null
        } else {
            return this.heap[0]
        }
    }
    extractMin() {
        if (this.heap.length == 1) {
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index) {
        let left = this.getLeftChildren(index)
        let right = this.getRightChildren(index)
        let smallest = index
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }
        if (smallest !== index) {
            this.swap(index, smallest)
            this.heapifyDown(smallest)
        }
    }
}


const heap = new MinHeap()

let arr = [23, 5, 2, 4, 2, 54, 6]

arr.forEach(item => heap.insertValue(item))

console.log(heap.heap)

heap.extractMin()
heap.extractMin()
heap.extractMin()
console.log(heap.heap)