
const fs = require('fs')

fs.unlink('output.txt', (err) => {
    if (err) throw err
    console.log('yess completed')
})