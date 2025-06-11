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
        if (index < 0 || index >= this.size) {
            return null
        }
        let node = new Node(value)
        if (index === 0) {
            this.head = node
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    searchByValue(value) {
        if (this.isEmpty()) {
            return false;
        }
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    reverse() {
        if (this.isEmpty()) return
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
    display() {
        if (this.isEmpty()) {
            console.log('the list is empty')
        } else {
            let curr = this.head
            let value = ''
            while (curr) {
                value += curr.value + '-->'
                curr = curr.next
            }
            console.log(value)
        }
    }
    removeByIndex(index) {
        if (this.isEmpty()) {
            return null
        }
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = removeNode.next

        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        return removeNode.value
    }

    removeEvenNumber() {
        if (this.isEmpty()) {
            return null
        }
        while (this.head && this.head.value % 2 == 0) {
            this.head = this.head.next
        }
        if (!this.head) return
        let prev = this.head
        while (prev.next) {
            if (prev.next.value % 2 == 0) {
                prev.next = prev.next.next
                this.size--
            } else {
                prev = prev.next
            }
        }
    }

    removeDuplicateFromSorted() {
        if (this.isEmpty()) {
            return
        }
        let prev = this.head
        while (prev.next) {
            if (prev.next.value === prev.value) {
                prev.next = prev.next.next
            } else {
                prev = prev.next
            }
        }
    }

    removeByValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let removeNode;
        if (this.head.value === value) {
            removeNode = this.head;
            this.head = removeNode.next;
        } else {
            let current = this.head;
            while (current.next && current.next.value !== value) {
                current = current.next;
            }
            if (!current.next) {
                return null; // Value not found
            }
            removeNode = current.next;
            current.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    removeFromUnsorted() {
        if (this.isEmpty()) return
        let curr = this.head
        let prev = null
        let seen = new Set()
        while (curr) {
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
    removeMiddle() {
        if (this.size <= 1) {
            return null; // No middle node to remove
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        let removeValue = slow.value
        if (prev) {
            prev.next = slow.next;
        }
        this.size--
        return removeValue
    }
    reverse() {
        if (this.isEmpty()) return
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
    detectCycle() {
        let slow = this.head
        let fast = this.head
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
            if (fast == slow) {
                return true
            }
        }
        return false
    }
}


const list = new LinkedList()

let arr = [1, 3, 4, 2, 4, 2, 43, 2, 5, 3, 5, 3, 63, 2]

arr.forEach(item => list.append(item))

list.display()

console.log(list.searchByValue(5))

console.log(list.removeByIndex(4))
console.log('the delete value:', list.removeByValue(4))
list.display()
list.removeEvenNumber()
list.display()

list.reverse()
list.display()

list.removeDuplicateFromSorted()
list.removeFromUnsorted()
list.display()
console.log(list.removeMiddle())
console.log(list.removeMiddle())
list.display()










