const fs = require('fs')

fs.unlink('./output.txt', (err) => {
    if (err) throw new Error('the error will delete file')
    console.log('completed')
})

fs.stat('./output.txt', (err, stats) => {
    if (err) throw new Error('the stat is errored')
    console.log(stats)
})