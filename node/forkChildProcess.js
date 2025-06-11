const { fork } = require('child_process')

const child = fork('./child.js')


child.send({ task: 'calculate', number: 5 })

child.on('message', (message) => {
    console.log('the message from child process:', message)
})

child.on('exit', (code) => {
    console.log('the child process closed the error code of:', code)
})

