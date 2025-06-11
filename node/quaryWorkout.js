const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('the req query box', req.query)
    next()
})

app.get('/', (req, res) => {
    res.send('try to query')
})

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query
    if (!num1 || !num2) {
        return res.send('the operation need 2 values')
    }
    let parseNumber1 = Number(num1)
    let parseNumber2 = Number(num2)

    if (isNaN(parseNumber1) || isNaN(parseNumber2)) {
        return res.send('pass valid data (Number only)')
    }

    let result = parseNumber1 + parseNumber2
    res.send(`the result is :${result}`)
})

app.listen(3000, () => {
    console.log('the port is now running in 3000')
})

