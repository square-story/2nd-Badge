class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let current = this.root
        for (let el of word) {
            if (!current.children[el]) {
                current.children[el] = new TrieNode()
            }
            current = current.children[el]
        }
        current.isEndOfWord = true
    }
    search(word) {
        let current = this.root
        for (let el of word) {
            if (!current.children[el]) {
                return false
            }
            current = current.children[el]
        }
        return current.isEndOfWord
    }
    startsWith(word) {
        let current = this.root
        for (let el of word) {
            if (!current.children[el]) {
                return false
            }
        }
        return true
    }
    deleteWord(word) {
        const deleteNode = (current, word, index) => {
            if (index === word.length) {
                if (!current.isEndOfWord) return false
                current.isEndOfWord = false
                return Object.keys(current.children).length === 0
            }
            let el = word[index]
            if (!current.children[el]) return false
            let shouldDelete = deleteNode(current.children[el], word, index + 1)
            if (shouldDelete) {
                delete current.children[el]
                return Object.keys(current.children).length === 0
            }
            return false
        }
        deleteNode(this.root, word, 0)
    }
    autoComplete(prefix) {
        let current = this.root
        let result = []
        for (let el of prefix) {
            if (!current.children[el]) {
                return []
            }
            current = current.children[el]
        }
        let findWords = (node, path) => {
            if (node.isEndOfWord) {
                result.push(path)
            }
            for (let el in node.children) {
                findWords(node.children[el], path + el)
            }
        }
        findWords(current, prefix)
        return result
    }
    findCommonPrefix() {
        let current = this.root
        let prefix = ''
        while (Object.keys(current.children).length == 1 && !current.isEndOfWord) {
            let [el] = Object.keys(current.children)
            prefix += el
            current = current.children[el]
        }
        return prefix
    }

}

const trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");

console.log("Longest Prefix:", trie.findCommonPrefix()); // Output: "fl"