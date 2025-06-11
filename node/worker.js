const { workerData, parentPort } = require('worker_threads')


const { task, number } = workerData

const sumUp = (arr) => {
    if (!arr.length) {
        return 0
    }
    return arr[0] + sumUp(arr.splice(1))
}

if (task === 'sum') {
    const result = sumUp(number)
    parentPort.postMessage(result)
}