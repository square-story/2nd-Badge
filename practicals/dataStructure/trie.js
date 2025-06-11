class Node {
    constructor() {
        this.children = {}
        this.end = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
    insert(word) {
        let curr = this.root
        for (let el of word) {
            if (!curr.children[el]) {
                curr.children[el] = new Node()
            }
            curr = curr.children[el]
        }
        curr.end = true
    }
    searchPrefix(prefix) {
        let curr = this.root
        for (let el of prefix) {
            if (!curr.children[el]) {
                return false
            }
        }
        return true
    }
    print(curr = this.root, word = '') {
        if (curr.end) {
            console.log(word)
        }
        for (let el in curr.children) {
            if (curr.children[el]) {
                this.print(curr.children[el], word + el)
            }
        }
    }
    longestPrefix() {
        let longest = ''
        let curr = this.root
        while (Object.keys(curr.children).length === 1 && !curr.end) {
            let [el] = Object.keys(curr.children)
            longest += el
            curr = curr.children[el]
        }
        return longest
    }
    deleteWord(word, curr = this.root, index = 0) {
        if (word.length === index) {
            if (!curr.end) return false
            curr.end = false
            return Object.keys(curr.children).length === 0
        }
        let el = word[index]
        if (!curr.children[el]) return false
        let deleteNode = this.deleteWord(word, curr.children[el], index + 1)
        if (deleteNode) {
            delete curr.children[el]
            return Object.keys(curr.children).length === 0 && !curr.end
        }
        return false
    }
    autoComplete(prefix) {
        let result = []
        let curr = this.root
        for (let el of prefix) {
            if (!curr.children[el]) {
                return []
            }
            curr = curr.children[el]
        }
        function find(curr, path) {
            if (curr.end) {
                result.push(path)
            }
            for (let el in curr.children) {
                if (curr.children[el]) {
                    find(curr.children[el], path + el)
                }
            }
        }
        find(curr, prefix)
        return result
    }
}

const trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");

console.log("Longest Prefix:", trie.longestPrefix()); // Output: "fl"