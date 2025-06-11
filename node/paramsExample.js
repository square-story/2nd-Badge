const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('Try params: Provide two numbers in the URL, e.g., /10/20')
})

app.get('/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send(`the result is ${Number(num1) + Number(num2)}`)
})


app.listen(3000, () => {
    console.log('server runing in the paramsExample on 3000')
})