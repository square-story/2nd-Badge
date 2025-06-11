class Graph {
    constructor() {
        this.adjecencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjecencyList[vertex1]) {
            this.adjecencyList[vertex1] = new Set()
        }
        if (!this.adjecencyList[vertex2]) {
            this.adjecencyList[vertex2] = new Set()
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    printGraph() {
        for (let vertex in this.adjecencyList) {
            console.log(`${vertex} -> ${[...this.adjecencyList[vertex]].join(', ')}`)
        }
    }

    hasEdges(vertex1, vertex2) {
        return (
            this.adjecencyList[vertex1].has(vertex2) && this.adjecencyList[vertex2].has(vertex1)
        )
    }

    removeVertex(vertex) {
        if (!this.adjecencyList[vertex]) return
        for (let el of this.adjecencyList[vertex]) {
            this.removeEdge(vertex, el)
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjecencyList[vertex1].delete(vertex2) &&
            this.adjecencyList[vertex2].delete(vertex1)
    }
    hasCycle(start, visited = new Set(), parent = null) {
        visited.add(start)
        for (let el of this.adjecencyList[start]) {
            if (!visited.has(el)) {
                if (this.hasCycle(el, visited, start)) {
                    return true
                }
            } else if (parent !== el) {
                return true
            }
        }
        return false
    }
}

const graph = new Graph()

//vertex Adding
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

//connect vertex trough the addEdges
graph.addEdges('A', 'B')
graph.addEdges('A', 'C')
graph.addEdges('B', 'D')
graph.addEdges('C', 'D')

//the printing....
graph.printGraph()

//checking the edges has
console.log(graph.hasEdges('B', 'C'),
    graph.hasEdges('B', 'D'))

graph.removeEdge('A', 'B')

console.log('after removing')
graph.printGraph()

graph.removeVertex('B')
console.log('after removing the vertex')

graph.printGraph()

console.log('has cycle: ', graph.hasCycle('A')) //false
graph.addEdges('D', 'A')
console.log('has cycle: ', graph.hasCycle('A')) //true