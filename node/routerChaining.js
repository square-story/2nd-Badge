const express = require('express');

const app = express();

const middleware = (req, res, next) => {
    console.log('the url is', req.url)
    next()
}

const nextMiddleWare = (req, res, next) => {
    console.log('the next middleware is called')
    next()
}

const lastMessage = (req, res) => {
    res.send('hello world')
}

app.get('/', middleware, nextMiddleWare, lastMessage)

app.listen(3000, () => {
    console.log('server running')
})