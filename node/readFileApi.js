const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()


app.get('/', (req, res) => {
    res.send('try read file url')
})

app.get('/read-file', (req, res) => {
    const filePath = path.join(__dirname, 'currentDate.txt')
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('error readFile:', err)
            return res.status(500).send('internal server error')
        }
        console.log('readfile called')
        res.send(data)
    })
})

app.get('/read-another', (req, res) => {
    let filePath = path.join(__dirname, 'input.txt')
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error occured :', err)
            return res.status(500).send('internal server error')
        }
        console.log('log the read-another')
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log('the server is running on 3000')
})