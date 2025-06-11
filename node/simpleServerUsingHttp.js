const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!\n')
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000')  // Log the server's running status to the console
})