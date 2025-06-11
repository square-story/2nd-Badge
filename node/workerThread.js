const { Worker } = require('worker_threads')

const work = (task, number) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: { task, number }
        })
        worker.on('message', (message) => resolve(message))
        worker.on('error', (err) => reject(err))
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error('Worker stopped operation exit code:', code))
            }
        })
    })
}


work('sum', [2, 5, 23, 4, 43, 3]).then((message) => console.log(`total sum of numbers is:${message}`)).catch((err) => console.error(err))