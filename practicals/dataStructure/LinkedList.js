class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 && index > this.size) {
            return
        }
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    print() {
        let value = ''
        let curr = this.head
        while (curr) {
            value += curr.value + '-->'
            curr = curr.next
        }
        console.log(value)
    }
    removeDuplicate() {
        let seen = new Set()
        let prev = null
        let curr = this.head
        while (curr && curr.next) {
            if (seen.has(curr.value)) {
                prev.next = curr.next
                this.size--
            } else {
                prev = curr
                seen.add(curr.value)
            }
            curr = curr.next
        }
    }
    removeOddNumbers() {
        if (this.isEmpty()) return
        while (this.head && this.head.value % 2 == 1) {
            this.head = this.head.next
            this.size--
        }
        if (this.isEmpty()) return
        let prev = null
        let curr = this.head
        while (curr && curr.next) {
            if (curr.value % 2 == 1) {
                prev.next = curr.next
                this.size--
            } else {
                prev = curr
            }
            curr = curr.next
        }
    }
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    sort() {
        if (!this.head || !this.head.next) return;

        let swapped;
        do {
            swapped = false
            let curr = this.head
            while (curr.next) {
                if (curr.value > curr.next.value) {
                    [[curr.value], [curr.next.value]] = [[curr.next.value], [curr.value]]
                    swapped = true
                }
                curr = curr.next
            }
        } while (swapped)
    }
}


const list = new LinkedList()

let arr = [2, 5, 23, 4, 65, 2, 7, 3, 3, 5, 2]

arr.forEach(item => list.prepend(item))

list.print()

list.insert(80, 2)
list.print()

list.reverse()
list.print()

// list.removeDuplicate()
// list.print()

// list.removeOddNumbers()
// list.print()

list.sort()

list.print()

