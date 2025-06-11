const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];


const groupBy = (arr, callback) => {
    return arr.reduce((acc, curr) => {
        const key = callback(curr)
        if (!acc[key]) {
            acc[key] = []; // Initialize the group if it doesn't exist
        }
        acc[key].push(curr); // Add the item to the group
        return acc;
    }, [])
}

const quantityCall = ({ quantity }) => quantity > 5 ? 'stokUnd' : 'stokIlla'

const result = groupBy(inventory, quantityCall)

console.log(result)