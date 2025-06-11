let arr = [3, 65, 43, 63, 56]


// const { secondSmallest, smallest } = arr.reduce((acc, curr) => {
//     if (curr < acc.smallest) {
//         acc.secondSmallest = acc.smallest
//         acc.smallest = curr
//     } else if (curr < acc.secondSmallest && curr !== acc.smallest) {
//         acc.secondSmallest = curr
//     }
//     return acc
// }, { smallest: Infinity, secondSmallest: Infinity })

// console.log(secondSmallest)

// function* gen(value) {
//     while (true) {
//         yield value
//         value -= 2
//         if (value == 0) {
//             return value
//         }
//     }
// }


// const some = gen(99)

// const time = setInterval(() => {
//     let someother = some.next()
//     if (someother.done) {
//         clearInterval(time)
//     } else {
//         console.log(someother.value)
//     }
// }, 1000);


// const p1 = () => new Promise((res, rej) => res('yes'))
// const p2 = () => new Promise((res, rej) => res('yes done'))


// p1().then((data) => {
//     console.log(data)
//     return p2()
// }).then((data) => console.log(data)).catch((err) => console.log(err)).finally(() => console.log('worked'))