const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const date = new Date()
    const time = date.toLocaleTimeString()
    const day = date.toLocaleDateString()
    console.log(time)
    console.log(day)
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('the server started')
})