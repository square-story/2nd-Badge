const child_process = require('child_process')

const child = child_process.fork('./child.js')

child.on('message', (message) => {
    console.log('child process started', message)
})


child.send('hello from parent')