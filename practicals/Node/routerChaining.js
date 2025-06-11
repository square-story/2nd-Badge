const express = require('express')
const app = express()

const log = (req, res, next) => {
    console.log(`the Requested method is: ${req.method} and the url is: ${req.url}`)
    next()
}

const queryCheck = (req, res, next) => {
    if (!req.query.name) {
        console.log('the name is required')
        res.status(400).send('the name is required')
    }
    next()
}

app.get('/', (req, res) => {
    res.send('try to add name after greet url in format of query')
})

app.get('/greet', log, queryCheck, (req, res) => {
    const { name } = req.query
    res.send(`hello ${name}`)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
})

app.listen(3000)

