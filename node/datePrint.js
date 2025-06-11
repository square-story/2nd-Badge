const fs = require('fs');

// Read the JSON file

const date = new Date().toDateString()

fs.writeFile('currentDate.txt', date, () => {
    console.log('the date write completed')
})

