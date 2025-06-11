class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Function to insert an element into the heap
    insert(value) {
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    // Function to bubble up the inserted element to its correct position in the heap
    bubbleUp(index) {
        let parentIndex = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            this.swap(index, parentIndex)
            this.bubbleUp(parentIndex)
        }
    }
    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop()
        } else {
            let removeValue = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.bubbleDown(0)
            return removeValue
        }
    }
    bubbleDown(index) {
        let left = 2 * index + 1
        let right = 2 * index + 2
        let largest = index
        if (left < this.heap.length && this.heap[largest] < this.heap[left]) {
            largest = left
        }
        if (right < this.heap.length && this.heap[largest] < this.heap[right]) {
            largest = right
        }
        if (largest !== index) {
            this.swap(index, largest)
            this.bubbleDown(largest)
        }
    }
}

const heap = new MaxHeap()

let arr = [12, 4, 2, 2, 4, 2, 54, 3]

arr.forEach(item => heap.insert(item))

console.log(heap.heap)
console.log(heap.extractMax())
console.log(heap.heap)