const eventEmitter = require('events')

// Create an instance of EventEmitter

const myEmitter = new eventEmitter()

// Add event listeners

myEmitter.on('someWhere', (message) => {
    console.log('someWhere called and the message is:', message)
})



myEmitter.emit('someWhere', 'someMessageFromAnotherChannel')