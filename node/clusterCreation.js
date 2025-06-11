const express = require('express')
const os = require('os')
const cluster = require('cluster')

if (cluster.isMaster) {
    let length = os.cpus().length
    console.log('the master is working in the ', process.pid)
    for (let i = 0; i < length; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`)
    })
} else {
    const app = express()
    app.get('/', (req, res) => {
        res.send(`Hello from Worker ${process.pid}`)
    })
    app.listen(3000, () => {
        console.log('app running on 3000 port')
    })
}