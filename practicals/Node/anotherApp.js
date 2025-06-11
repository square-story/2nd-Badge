const eventEmmiter = require('events')

const myEvent = new eventEmmiter()

myEvent.on('some', () => {
    console.log('some is called')
})

myEvent.emit('some')