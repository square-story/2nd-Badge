const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.send('welcome: try add some text in the params')
})

const writeToAFile = (fileContent) => {
    fs.writeFile(path.join(__dirname, 'output.txt'), fileContent, (err) => {
        if (err) throw Error('error writing file', err)
        console.log('file saved successfully')
    })
}


app.get('/:text', (req, res) => {
    const { text } = req.params
    if (!text) {
        return res.status(400).send('Text is required')
    }
    let result = withoutVolwels(text)
    writeToAFile(result) // Write result to a file named 'output.txt'
    res.send(`Hello, ${result}!`)
})


const withoutVolwels = (text) => {
    let result = ''
    let vowels = new Set(['A', 'E', 'I', 'O', 'U'])
    for (let el of text) {
        if (vowels.has(el.toUpperCase())) {
            continue
        } else {
            result += el
        }
    }
    return result
}

app.listen(3000)