class Graph {
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjancencyList[vertex]) {
            this.adjancencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjancencyList[vertex1]) {
            this.adjancencyList[vertex1] = new Set()
        }
        if (!this.adjancencyList[vertex2]) {
            this.adjancencyList[vertex2] = new Set()
        }
        this.adjancencyList[vertex1].add(vertex2)
        this.adjancencyList[vertex2].add(vertex1)
    }
    print() {
        for (let vertex in this.adjancencyList) {
            console.log(`${vertex} -> ${[...this.adjancencyList[vertex]].join(', ')}`)
        }
    }
    removeVertex(vertex) {
        if (!this.adjancencyList[vertex]) return
        for (let el of this.adjancencyList[vertex]) {
            this.removeEdges(vertex, el)
        }
    }

    removeEdges(vertex1, vertex2) {
        this.adjancencyList[vertex1].delete(vertex2) && this.adjancencyList[vertex2].delete(vertex1)
    }
    BFS(start) {
        let queue = [start]
        let visited = new Set()
        visited.add(start)
        while (queue.length) {
            let vertex = queue.shift()
            console.log(vertex)
            this.adjancencyList[vertex].forEach(item => {
                if (!visited.has(item)) {
                    visited.add(item)
                    queue.push(item)
                }
            })
        }
    }
    dfs(start, visited = new Set()) {
        visited.add(start)
        console.log(start)
        this.adjancencyList[start].forEach(item => {
            if (!visited.has(item)) {
                this.dfs(item, visited)
            }
        })
    }
    hashCycle(vertex, visited = new Set(), parent = null) {
        visited.add(vertex)
        for (let el of this.adjancencyList[vertex]) {
            if (!visited.has(el)) {
                if (this.hashCycle(el, visited, vertex)) {
                    return true
                }
            } else if (el !== parent) {
                return true
            }
        }
        return false
    }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdges('A', 'B');
graph.addEdges('B', 'D');

graph.dfs('A');

console.log(graph.hashCycle('A'))
