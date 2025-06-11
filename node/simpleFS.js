const fs = require('fs');
const path = require('path');
const os = require('os')

//readfile
fs.readFile('output.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
});

//writefile
fs.writeFile('output.txt', 'Hello! Node.js', (err) => {
    if (err) throw err
    console.log('yess the work is done')
})

//append some content into existing file
fs.appendFile('output.txt', '\nsomeAppendText', (err) => {
    if (err) throw err;
    console.log('write complete')
})



//delete file

fs.writeFile('simp.txt', 'sample text', (err) => {
    if (err) throw err
    console.log('file created')
})

fs.unlink('simp.txt', (err) => {
    if (err) throw err
    console.log('delete successfull')
})


console.log(path.join('/user', 'local', 'output.txt'))

const featchOsDetails = async () => {
    let platform = await os.platform()
    let arch = await os.arch()
    console.log('the platform is: ' + platform + '\n the arch is: ' + arch)
}
featchOsDetails()