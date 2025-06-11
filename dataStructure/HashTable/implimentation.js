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
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] == key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        let index = this.hash(key)
        let bucket = this.table[index]

        if (bucket) {
            let item = bucket.find(item => item[0] == key)
            if (item) {
                return item[1]
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let i = bucket.findIndex(item => item[0] === key)
            if (i !== -1) {
                bucket.splice(i, 1)
                if (bucket.length === 0) {
                    this.table[index] = undefined
                }
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }

}

const table = new HashTable(20)
table.set('name', 'adwaith')
table.set('name', 'adwaith c')

table.set('age', '20')

table.display()

table.remove('age')
// table.display()
