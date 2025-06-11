function* generateFunctionExmaple() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;
    yield 10;
}



const counter = generateFunctionExmaple()

console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())



function* some() {
    yield 'apple';
    yield 'banana';
    yield 'robust';
    yield 'cherry';
}


for (let el of some()) {
    console.log(el)
}


function* count(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}



const range = count(1, 5)



console.log(...range)

const person1 = { name: "sadik" }


function* generator(value) {
    while (true) {

        yield value
        value -= 5
        if (value == 50) {
            return
        }

    }
}

const gen = generator(100)

for (let i = 0; i < 10; i++) {
    console.log(gen.next().value)
}
