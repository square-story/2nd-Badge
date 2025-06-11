const express = require('express')
const os = require('os')
const cluster = require('cluster')

if (cluster.isMaster) {
    const numCPUs = os.cpus().length
    console.log(`Master ${process.pid} is running`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (cluster) => {
        console.log(`cluster ${cluster.process.pid} died. Starting a new cluster...`)
        cluster.fork()
    })
} else {
    const app = express()

    app.get('/', (req, res) => {
        res.send(`Hello from cluster ${process.pid}`)
    })

    app.listen(3000, () => {
        console.log(`cluster ${process.pid} started`)
    })

}