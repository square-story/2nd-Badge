const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req)
    next()
})

app.get('/', (req, res) => {
    console.log('yes this is home route')
    res.send('hello world')
})

app.listen(3000)