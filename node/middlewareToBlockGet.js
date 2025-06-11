const express = require('express')

const app = express()

app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('not autherized')
    } else {
        console.log(req.method)
    }
    next()
})


app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(3000)