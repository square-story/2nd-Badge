const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('something is went wrong')
})


app.listen(4000,()=>{
    console.log('Server is running on port 4000');  // Log the server's running status to the console
})