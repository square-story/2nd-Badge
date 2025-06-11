function person(name, age) {
    this.name = name,
        this.age = age,
        this.sayName = function () {
            console.log(`the name is ${this.name}`)
        }
}

person.prototype.sayAge = function () {
    console.log(`the age is now ${this.age}`)
}

const person1 = new person('sadik', 22)

person1.sayName()
person1.sayAge()


function Animal() { }

Animal.prototype.greet = function () {
    console.log('hello this is from animal')
}

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)


Dog.prototype.eat = function () {
    console.log('the dog is eating')
}


const dog1 = new Dog()

dog1.greet()
dog1.eat()

function PetDog() { }
PetDog.prototype = Object.create(Dog.prototype)

PetDog.prototype.eat = function () {
    console.log('the pet Dog is eating')
}

const petdog1 = new PetDog()

petdog1.greet()
petdog1.eat()