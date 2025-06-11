const { Worker } = require('worker_threads')

const worker = new Worker('./worker.js', () => {
    console.log('Worker started')
})

worker.postMessage({ message: 'Hello from main thread' })

worker.on('message', (message) => {
    console.log('Received message from worker:', message)
})