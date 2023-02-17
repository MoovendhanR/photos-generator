const express = require('express');
const mongoose =require("mongoose");
const connect = require('./config/db.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.get("/",async(req, res)=>{
   res.send("hello world")
})

const PORT = process.env.port || 5000

mongoose.set("strictQuery",false);
app.listen(PORT,async()=>{
    await connect();
    console.log(`Listening on port ${PORT}`)
})


 
//https://www.mongodb.com/cloud/atlas