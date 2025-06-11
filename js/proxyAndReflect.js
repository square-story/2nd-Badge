const person = { name: 'sadik', age: 23 }

const handler = {
    get(target, property) {
        console.log(`accessing the ${property}`)
        return Reflect.get(target, property)
    },

    set(target, property, value) {
        console.log(`setting the property ${property} into value : ${value}`)
        return Reflect.set(target, property, value)
    }
}

const proxyPerson = new Proxy(person, handler)

proxyPerson.age = 24

console.log(proxyPerson.age)