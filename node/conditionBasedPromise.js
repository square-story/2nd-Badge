const fs = require('fs')

const writeFile = (message) => {
    const timeStamp = new Date().toISOString()
    const logMessage = `${timeStamp} - ${message}\n\n`
    fs.appendFile('promiseLog.txt', logMessage, (err) => {
        if (err) {
            console.error('Error of Writing:', err)
        } else {
            console.log('log written:', logMessage.trim())
        }
    })
}

const myPromise = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve('promise resolved successfully')
            } else {
                reject('promise rejected with error: ' + randomNumber)
            }
        }, 1000);
    })
}

myPromise()
    .then((message) => {
        console.log(message)
        writeFile(`Resolved ${message}`)
    }).catch((err) => {
        console.log(err)
        writeFile(`Rejected ${err}`)
    })