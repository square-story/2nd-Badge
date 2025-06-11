function operator(a,b,operations){
    return operations(a,b)
}

const sum = (a,b)=>a+b

const minus = (a,b)=>a-b

console.log(operator(2,53,sum))

console.log(operator(34,32,minus))

