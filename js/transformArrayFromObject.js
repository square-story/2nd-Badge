const input = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 35 }
];

const transformArray = (input) => {
    return input.reduce((result, curr) => {
        for (let [key, value] of Object.entries(curr)) {
            if (!result[key]) {
                result[key] = []
            } else {
                result[key].push(value)
            }
        }
        return result
    }, {})
}


const output = transformArray(input)

console.log(output)