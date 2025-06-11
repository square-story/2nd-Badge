let arr = [1, 34, 2, 4, 23, 4, 5, 3, 43, 2]


const { secondSmallest, smallest } = arr.reduce((acc, curr) => {
    if (curr < acc.smallest && curr % 2 == 0) {
        acc.secondSmallest = acc.smallest
        acc.smallest = curr
    } else if (acc.secondSmallest > curr && curr !== acc.smallest && curr % 2 == 0) {
        acc.secondSmallest = curr
    }
    return acc
}, { smallest: Infinity, secondSmallest: Infinity })


console.log('secondSmallest is: ', secondSmallest)
console.log('smallest is: ', smallest)

