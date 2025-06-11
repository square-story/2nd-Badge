let arrayObj = [
    { name: 'Abu', age: 34, address: { place: 'Wayanad', city: 'Kollam' } },
    { name: 'John', age: 28, address: { place: 'Thiruvananthapuram', city: 'Kerala' } },
    { name: 'Sarah', age: 45, address: { place: 'Kochi', city: 'Cochin' } },
    { name: 'Mike', age: 39, address: { place: 'Alappuzha', city: 'Kerala' } },
    { name: 'Anna', age: 30, address: { place: 'Pathanamthitta', city: 'Kerala' } },
    { name: 'Ravi', age: 23, address: { place: 'Ernakulam', city: 'Cochin' } }
];

for (let el of arrayObj) {
    if (el.name === 'Anna') {
        el.address.pincode = '676320'
    }
}

console.log(arrayObj)
