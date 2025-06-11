const person = {
    name: 'John',
    greet: function (message = 'some message') {
        console.log(`${this.name} is the saying : ${message}`)
    }
}

const person2 = { name: 'anotherJohn' }

person.greet()

person.greet.call(person2, 'hello say')

module.exports = person

