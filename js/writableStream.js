const fs = require('fs')

const writable = fs.createWriteStream('somemore.txt')


writable.write('hello')
writable.write('\nnot hello')
writable.write('\ni just kidding hello')
writable.end()

writable.on('finish',()=>{
    console.log('yes it\'s finished')
})