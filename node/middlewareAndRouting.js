const express = require('express')

const app = express()


const firstMiddleWare = (req, res, next) => {
    console.log('the firstMiddleware called')
    next()
}
const secondMiddleware = (req, res, next) => {
    console.log('the second middleware called')
    next()
}

app.get('/', firstMiddleWare, secondMiddleware, (req, res) => {
    res.write('hello')
    res.write('\nworld')
    res.end('\nended')
})

app.listen(3000, () => {
    console.log('the server running 3000 port')
})