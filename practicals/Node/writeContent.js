const fs = require('fs')


fs.readFile('./output.txt', 'utf-8', (err, data) => {
    if (err) throw new Error('the new error found')
    fs.writeFile('./destination.txt', data, 'utf-8', (err) => {
        if (err) throw new Error('error while write file')
        console.log('Content successfully copied from source.txt to destination.txt');
    })
})

