const fs = require('fs')


const readable = fs.createReadStream('some.txt',{encoding:'utf-8'})

readable.on('data',(chunk)=>{
    console.log('The Recived Data: ',chunk)
})

readable.on('end',()=>{
    console.log('ended')
})

