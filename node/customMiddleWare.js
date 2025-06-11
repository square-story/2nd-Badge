const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log(`The Method Is ${req.method} And the body contain ${req.url}`)
    next();
})