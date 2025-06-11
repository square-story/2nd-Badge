const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('try params to send numbers')
})

app.get('/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params
    const result = Number(num1) + Number(num2)
    res.send(`the result is : ${result}`)
})

app.use((req, res, next) => {
    res.status(404).send('404 page not found')
})

app.listen(3000)