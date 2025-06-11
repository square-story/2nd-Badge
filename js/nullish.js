let value = null

let valueSecond = undefined


console.log(valueSecond??value)


valueSecond = 2;


value = null;


console.log(valueSecond ?? value)