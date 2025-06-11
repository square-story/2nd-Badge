class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = new Set()
        }
        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = new Set()
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    print() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(', ')}`)
        }
    }

    hasEdges(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    deleteVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        for (let el of this.adjacencyList[vertex]) {
            this.removeEdges(vertex, el)
        }
    }
    removeEdges(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2) &&
            this.adjacencyList[vertex2].delete(vertex1)
    }
    BFS(start) {
        let queue = [start]
        let visited = new Set()
        visited.add(start)
        while (queue.length) {
            let vertex = queue.shift()
            console.log(vertex)
            this.adjacencyList[vertex].forEach(item => {
                if (!visited.has(item)) {
                    visited.add(item)
                    queue.push(item)
                }
            })
        }
    }
    DFS(start, visited = new Set()) {
        visited.add(start)
        console.log(start)
        this.adjacencyList[start].forEach(item => {
            if (!visited.has(item)) {
                this.DFS(item, visited)
            }
        })
    }
    hasCycle(start, visited = new Set(), parent = null) {
        visited.add(start)
        for (let el of this.adjacencyList[start]) {
            if (!visited.has(el)) {
                if (this.hasCycle(el, visited, start)) {
                    return true
                }
            } else if (el !== parent) {
                return true
            }
        }
        return false
    }
}

const graph = new Graph()

graph.addEdges('A', 'B')
graph.addEdges('B', 'C')
graph.addEdges('C', 'D')

graph.print()
graph.BFS('B')

// graph.DFS('A')

console.log(graph.hasCycle('A')) // false
graph.addEdges('D', 'A')
console.log(graph.hasCycle('A')) // true