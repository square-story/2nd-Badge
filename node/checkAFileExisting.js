//using fs.existsSync for synchronous operation

const fs = require('fs')
const filePath = './currentDate.txt'


if (fs.existsSync(filePath)) {
    console.log('yess this is existing')
} else {
    console.log('no it\'s not founding')
}


console.log('hello')

//Using fs.access (Asynchronous)

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('nah not founded')
    } else {
        console.log('yyeeess')
    }
})