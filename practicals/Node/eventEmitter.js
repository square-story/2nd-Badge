const evenEmitter = require('events')

const event = new evenEmitter()

event.on('some', () => {
    console.log('Event triggered')
})



event.emit('some')
