const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.params, req.query)
    next()
})

app.get('/', (req, res) => {
    res.send('try /add/num1?num2=Number')
})

app.get('/add/:num1', (req, res) => {
    const { num2 } = req.query
    const { num1 } = req.params
    if (!num1 || !num2) {
        return res.status(404).send('want 2 number to perfom this operation')
    }
    const parseNumber1 = Number(num1)
    const parseNumber2 = Number(num2)

    if (isNaN(parseNumber1) || isNaN(parseNumber2)) {
        return res.status(404).send('try using 2 number to avoid number collesion')
    }
    const result = parseNumber1 + parseNumber2;

    res.status(200).send(`the result is : ${result}`)
})

app.listen(3000, () => {
    console.log('the port is running 3000')
})