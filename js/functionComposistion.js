//function composistion
const add = (a, b) => {
    return a + b
}

const multiply = (a, b) => {
    return a * b
}

const compo = (a, b) => add(multiply(a, b), b)


console.log(compo(2, 3))
