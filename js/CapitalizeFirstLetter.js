let str = 'asfjkafsjello'

function capitalize(str) {
    return str.split('')[0].toUpperCase() + str.split('').splice(1).join('').toLowerCase()
}

console.log(capitalize(str))