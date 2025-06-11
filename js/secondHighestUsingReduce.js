function secondLargest(arr) {
    return arr.reduce((acc, curr) => {
        if (curr > acc[0]) {
            acc[1] = acc[0]
            acc[0] = curr
        } else if (curr > acc[1] && acc[0] > curr) {
            acc[1] = curr
        }
        return acc
    }, [-Infinity, -Infinity])[1]
}

console.log(secondLargest([2, 4, 3, 5, 3])); // Output: 4
