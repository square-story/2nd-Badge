const eventEmitter = require('events')
const person = require('./callApplyBind')
const event = new eventEmitter()

event.once('event',(err)=>{
    if(err) throw err
    console.log('hello')
})

const anotherPerson = {name:'shafi'}

person.greet.call(anotherPerson,'hello say')




event.emit('event')
event.emit('event')
event.emit('event')