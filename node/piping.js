const fs = require('fs')

const readFile = fs.createReadStream('./promiseLog.txt', 'utf-8')

const writeFile = fs.createWriteStream('./someotherPromiseLog.txt', 'utf-8')

readFile.pipe(writeFile).on('finish', () => {
    console.log('completed')
})