const person = {
    name: 'John',
    age: 30
}


const handler = {
    get(target, property) {
        return property in target ? target[property] : 'Didn\'t find any Property'
    },
    set(target, property, value) {
        if (property == "age" && value < 0) {
            console.log('the age must be greater than 0')
            return false
        }
        property[target] = value
    }
}

const proxyPerson = new Proxy(person, handler)

console.log(proxyPerson.name)

console.log(proxyPerson.age)

console.log(proxyPerson.hight)

proxyPerson.age = -1