class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let node = new Node(value)
        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (root.value > node.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    findMin(root = this.root) {
        if (!root.left) {
            return root.value
        } else {
            return this.findMin(root.left)
        }
    }
    deleteNode(root, value) {
        if (!root) return root
        if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        } else {
            if (!root.right && !root.left) return null
            if (!root.right) return root.left
            if (!root.left) return root.right
            root.value = this.findMin(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    inOrder(root = this.root) {
        return !root ? [] : [...this.inOrder(root.left), root.value, ...this.inOrder(root.right)]
    }


    validBST(root = this.root, max = Infinity, min = -Infinity) {
        if (!root) return true
        if (root.value <= min && root.value >= max) {
            return false
        }
        return (
            this.validBST(root.left, root.value, min) &&
            this.validBST(root.right, max, root.value)
        )
    }
    countLeaf(root = this.root) {
        if (!root) return 0
        if (!root.right && !root.left) return 1
        return this.countLeaf(root.right) + this.countLeaf(root.left)
    }
    hightOfTree(root = this.root) {
        if (!root) return 0
        let left = this.hightOfTree(root.left)
        let right = this.hightOfTree(root.right)
        return Math.max(left, right) + 1
    }
    findClosest(target) {
        let closest = this.root.value
        function findValue(root) {
            if (!root) return 0
            if (Math.abs(closest - target) > Math.abs(root.value - target)) {
                closest = root.value
            }
            if (root.value > target) {
                return findValue(root.left)
            } else {
                return findValue(root.right)
            }
        }
        findValue(this.root)
        return closest
    }
    secondSmallest(root = this.root) {
        if (!root || (!root.right && !root.left)) {
            throw new Error('the node have must 2 children')
        }
        if (root.left && (!root.left.right && !root.left.left)) {
            return root.value
        }
        if (!root.left && root.right) {
            return this.findMin(root.right)
        }
        return this.secondSmallest(root.left)
    }
    findMax(root = this.root) {
        if (!root.right) {
            return root.value
        } else {
            return this.findMax(root.right)
        }
    }
    secondLargest(root = this.root) {
        if (!root || (!root.right && !root.left)) {
            throw new Error('the error in the code')
        }
        if (root.right && (!root.right.right && !root.right.left)) {
            return root.value
        }
        if (!root.right && root.left) {
            return this.findMax(root.left)
        }
        return this.secondLargest(root.right)
    }
}


const bst = new BinarySearchTree()

let code = [1, 2, 3, 4]

code.forEach(item => bst.insert(item))

console.log(bst.inOrder())

bst.delete(343)

console.log(bst.inOrder())


console.log('the valid bst:', bst.validBST())

console.log('the leaf node:', bst.countLeaf())

console.log('the hight node:', bst.hightOfTree())

console.log('the closest of 30 is:', bst.findClosest(30))

console.log('the secondLeast :', bst.secondSmallest())

console.log('the second largest :', bst.secondLargest())

