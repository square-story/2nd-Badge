class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let index = 0
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i)
        }
        return index % this.size
    }
    set(key, value) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameItem = bucket.find(item => item[0] == key)
            if (sameItem) {
                sameItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameItem = bucket.find(item => item[0] == key)
            if (sameItem) {
                return sameItem[1]
            }
        }
        return -1
    }
    has(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameItem = bucket.find(item => item[0] == key)
            if (sameItem) {
                return true
            }
        }
        return false
    }
}

const map