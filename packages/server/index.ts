const express = require('express')


const app = express();
let port = 5500;

app.listen(port,()=>{
    console.log(`The backend express server is up and running.`)
})