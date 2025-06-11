//imlimentation of Object
const simpleObject1 = {
    name:'sadik',
    //traditional way
    greet:function (){
        console.log(`this is the name property ${this.name}`)
    },
    //new es6 format
    goodBye(){
        console.log(this.name,'Goodbye Guys')
    }
}

simpleObject1.goodBye()
simpleObject1.name
simpleObject1.greet('salman')



const simpleObject2 = {
    a:'1',
    b:'2',
    c:'3'
}


console.log(Object.keys(simpleObject2))

console.log(Object.values(simpleObject2).map(Number))

console.log(Object.assign(simpleObject1,simpleObject2)) //Copies the values of all enumerable properties from one or more source objects to a target object.

const simpleObject3 = {
    a:3
}

simpleObject3.b = 7;

Object.freeze(simpleObject3)


simpleObject3.a = 8;

console.log(simpleObject3) //You can't allow to modifiy and add into that object if the Object is freeze

const simpleObject4 = {
    a :'some',
    name:'someName'
}


Object.seal(simpleObject4) // you can modify only on the existing field and it will not add new one If the object is seal.

console.log(simpleObject4)

simpleObject4.name = 'NameSome'


console.log(simpleObject4)


const greetObj = {greet(){console.log('Hello Sadik')}}


const simpleObject5 = Object.create(greetObj) // will create the object with other object properties like copy....
simpleObject5.greet()


const simpleObject6 = {
    a:'someA',
    b:'someB',
    c:'someC'
}



console.log(simpleObject6.hasOwnProperty('a'))


console.log(simpleObject6.hasOwnProperty('b'))// this will check the properity in the object it will get true 

console.log(simpleObject6.hasOwnProperty('d')) // this will false.


console.log(Object.is(0,-0)) // false

console.log(0===-0) // true 

console.log(NaN === NaN) //false

console.log(Object.is(NaN,NaN)) // true



//TODO===Practical use Cases Of Object methods

const orginal = {a:'ehllo',b:'boosee'}


const duplicate = Object.assign({},orginal) //duplication of an object

orginal.c = 'hahha';

console.log(duplicate) //{ a: 'ehllo', b: 'boosee' }
console.log(orginal) //{ a: 'ehllo', b: 'boosee', c: 'hahha' }



//way to merge 2 or more object
console.log({orginal,duplicate})

const simpleObject7 = {...orginal,...duplicate}

console.log(simpleObject7) //{ a: 'ehllo', b: 'boosee', c: 'hahha' }


//check the key is exsiting or not
console.log('a' in simpleObject7) //true
console.log('d' in simpleObject7) //false
console.log(simpleObject7.hasOwnProperty('a')) //true
console.log(simpleObject7.hasOwnProperty('d')) //false








