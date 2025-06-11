class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
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
        if (root.value < node.value) {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        } else {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        }
    }

    findMin(root = this.root) {
        if (!root.left) {
            return root.value
        } else {
            return this.findMin(root.left)
        }
    }

    findMax(root = this.root) {
        if (!root.right) {
            return root.value
        } else {
            return this.findMax(root.right)
        }
    }

    search(value) {
        return this.searchValue(this.root, value)
    }
    searchValue(root, value) {
        if (!root) {
            return false
        } else if (root.value === value) {
            return true
        } else if (root.value > value) {
            return this.searchValue(root.left, value)
        } else {
            return this.searchValue(root.right, value)
        }
    }
    inOrder(root = this.root) {
        return !root ? [] : [...this.inOrder(root.left), root.value, ...this.inOrder(root.right)]
    }
    postOrder(root = this.root) {
        return !root ? [] : [...this.postOrder(root.left), ...this.postOrder(root.right), root.value]
    }
    preOrder(root = this.root) {
        return !root ? [] : [root.value, ...this.preOrder(root.left), ...this.preOrder(root.right)]
    }
    levelOrder() {
        let queue = [this.root]
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (!root) return root
        if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else {
            //first case : The node have no children and value in the node
            if (!root.left && !root.right) return null
            //second case : the node have one child and it will left or right
            if (!root.left) return root.right
            if (!root.right) return root.left
            //3rd senario : Node Has Two Children
            root.value = this.findMin(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    isValidBST(root = this.root, min = -Infinity, max = Infinity) {
        if (!root) return true
        if (root.value <= min || root.value >= max) return false
        return (
            this.isValidBST(root.left, min, root.value) &&
            this.isValidBST(root.right, root.value, max)
        )
    }
    findKthSmallest(k) {
        let inOrder = this.inOrder()
        return inOrder[k - 1] || null
    }
    countLeaf(root = this.root) {
        if (!root) return 0
        if (!root.right && !root.left) return 1
        return this.countLeaf(root.right) + this.countLeaf(root.left)
    }
    countNodes(root = this.root) {
        if (!root) return 0
        return 1 + this.countNodes(root.right) + this.countNodes(root.left)
    }
    hightOfTree(root = this.root) {
        if (!root) {
            return -1
        }
        let leftHight = this.hightOfTree(root.left)
        let rightHight = this.hightOfTree(root.right)
        return 1 + Math.max(leftHight, rightHight)
    }
    findClosest(target) {
        let closest = this.root.value
        function isClosest(root) {
            if (!root) return 0
            if (Math.abs(closest - target) > Math.abs(root.value - target)) {
                closest = root.value
            }
            if (target < root.value) {
                return isClosest(root.left)
            } else {
                return isClosest(root.right)
            }
        }
        isClosest(this.root)
        return closest
    }
    secondSmallest(root = this.root) {
        if (!root || (!root.right && !root.left)) {
            throw new Error("must have the 2 node");
        }
        if (root.left && (!root.left.right && !root.left.left)) {
            return root.value
        }
        if (!root.left && root.right) {
            return this.findMin(root.right)
        }
        return this.secondSmallest(root.left)
    }
    secondHighest(root = this.root) {
        if (!root || (!root.right && !root.left)) {
            throw new Error("node must have atleast 2 child");
        }
        if (root.right && !root.right.left && !root.right.right) {
            return root.value
        }
        if (!root.right && root.left) {
            return this.findMax(root.left)
        }
        return this.secondHighest(root.right)
    }
    removeEvenNumber(root = this.root) {
        if (!root) return null
        root.left = this.removeEvenNumber(root.left)
        root.right = this.removeEvenNumber(root.right)
        if (root.value % 2 === 0) {
            this.delete(root.value)
        }
        return root
    }
    thirdLargest(root = this.root) {
        let result = null
        let count = 0
        function traversal(node) {
            if (!node || count >= 3) {
                return
            }
            traversal(node.right)
            count++
            if (count === 3) {
                result = node.value
                return
            }
            traversal(node.left)
        }
        traversal(root)
        return result
    }
    secondHighestUsingInOrder(root = this.root) {
        let result = null
        let count = 0
        function traversal(root) {
            if (!root || count == 2) {
                return
            }
            traversal(root.right)
            count++
            if (count == 2) {
                result = root.value
                return
            }
            traversal(root.left)
        }
        traversal(root)
        return result
    }
}


const bst = new BST();

// Insert values into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

// Search for values
console.log("Search 7:", bst.search(7)); // true
console.log("Search 17:", bst.search(17)); // false

// Traversal
console.log("In-order Traversal:");
console.log(bst.inOrder()) // 2, 5, 7, 10, 12, 15, 20

console.log("Pre-order Traversal:");
console.log(bst.preOrder()); // 10, 5, 2, 7, 15, 12, 20

console.log("Post-order Traversal:");
console.log(bst.postOrder()); // 2, 7, 5, 12, 20, 15, 10

// Find Min and Max
console.log("Min value:", bst.findMin()); // 2
console.log("Max value:", bst.findMax()); // 20

// Delete a value
bst.delete(15);
console.log("In-order Traversal after deletion:");
console.log(bst.inOrder()) // 2, 5, 7, 10, 12, 20

console.log('hight of a node:', bst.hightOfTree())

console.log('the bst is valid:', bst.isValidBST())
console.log('the count of leaf node is:', bst.countLeaf())
console.log('the count of nodes is:', bst.countNodes())
console.log('the second smallest is:', bst.secondSmallest())

console.log('the closest element of 18 is:', bst.findClosest(18))

console.log('the second smallest in the bst:', bst.secondSmallest())
console.log('the second highest in the bst:', bst.secondHighest())

console.log('the level order assig:')
bst.levelOrder()

console.log('the thirdLargest:', bst.thirdLargest())
console.log('the 2nd largest using traversal:', bst.secondHighestUsingInOrder())