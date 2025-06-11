const fs = require('fs')

const writableStream = fs.createWriteStream('some.txt')

const some = 'not Hello'
const word = '\nsome hello'
writableStream.write(some)
writableStream.write(word)
writableStream.end();

writableStream.on('finish', () => {
  console.log('All data written to file.');
});






