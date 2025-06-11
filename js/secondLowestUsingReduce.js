let arr = [1, 3, 4, 2, 42, 4, 5]

function secondLowest(arr) {
    return arr.reduce((acc, curr) => {
        if (acc[0] > curr) {
            acc[1] = acc[0]
            acc[0] = curr
        } else if (acc[1] > curr && acc[0] !== curr) {
            acc[1] = curr
        }
        return acc
    }, [Infinity, Infinity])[1]
}

console.log(secondLowest(arr))