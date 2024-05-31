import express from 'express'

let app = express();

let port = 5500;




app.listen('http://localhost:3001',()=>{
    console.log('express server is up and running.')
})