const express = require('express');
const mongoose =require('mongoose');
const connect = require('./config/db.js');


const app = express();


const PORT = process.env.port || 5000

mongoose.set("strictQuery",false);
app.listen(PORT,async()=>{
    await connect();
    console.log(`Listening on port ${PORT}`)
})


 
//https://www.mongodb.com/cloud/atlas