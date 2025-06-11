const fs = require('fs')

fs.link('./output.txt', 'newOutput.txt', () => {
    console.log('yes created')
})