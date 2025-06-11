class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null
        }
        let node = new Node(value)
        if (index === 0) {
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
    removeByIndex(index) {
        if (this.isEmpty() || index < 0 || index >= this.size) {
            return null
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeByValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next.value === value) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return removeNode.value
            }
        }
        return null
    }

    removeEvenNumber() {
        if (this.isEmpty()) return null
        while (this.head && this.head.value % 2 == 0) {
            this.head = this.head.next
            this.size--
        }
        if (!this.head) return; // If the list is now empty, stop   
        let prev = this.head
        while (prev.next) {
            if (prev.next.value % 2 == 0) {
                prev.next = prev.next.next
                this.size--
            } else {
                prev = prev.next
            }
        }
        this.print()
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

    removeDuplicateFromSorted() {
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr.next) {
            if (curr.next.value === curr.value) {
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
    }

    removeDuplicateFromUnsorted() {
        let curr = this.head
        let prev = null
        let seen = new Set()
        while (curr && curr.next) {
            if (seen.has(curr.value)) {
                prev.next = curr.next
                this.size--
            } else {
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    removeMiddleElement() {
        let slow = this.head
        let fast = this.head
        let prev = null
        while (fast.next && fast) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }

    search(value) {
        if (this.isEmpty()) {
            return 'The list is empty'
        } else {
            let prev = this.head
            let i = 0
            while (prev.next) {
                if (prev.value === value) {
                    return i
                }
                prev = prev.next
                i++
            }
            return 'can\'t find it'
        }
    }

    searchByIndex(index) {
        if (index < 0 || index >= this.size) {
            return -1
        }
        let prev = this.head
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        return prev.value
    }

    print() {
        if (this.isEmpty()) {
            return null
        } else {
            let prev = this.head
            let value = ''
            while (prev) {
                value += prev.value + '-->'
                prev = prev.next
            }
            console.log(value)
        }
    }
}

const list = new LinkedList()

let arr = [1, 3, 3, 4, 2, 2, 4, 2, 1, 5, 3, 5, 3, 1, 4, 2, 5, 4]

arr.forEach(item => list.append(item))
console.log('<--Printing the List -->')
list.print()
// console.log('<--remove 0th element the List -->')
// console.log('remove element is: ',list.removeByIndex(0))
// console.log('<--after removing -->')
// list.print()
// console.log('<--remove 5th element the List -->')
// console.log('remove element is: ',list.removeByIndex(5))
// console.log('<--after removing -->')
// list.print()
// console.log('<--remove by value from the List  -->')
// console.log('the remove value is :',list.removeByValue(1))
// console.log('<--after removing -->')
// list.print()
console.log('remove even numbers from list:')
list.removeEvenNumber()

// console.log(list.search(3))
// console.log(list.searchByIndex(3))

console.log('reverse a list')
list.reverse()
list.print()

console.log('remove dupllicate in sorted')
list.removeDuplicateFromSorted()
list.print()

console.log('removeMiddle')
list.removeMiddleElement()
list.print()
