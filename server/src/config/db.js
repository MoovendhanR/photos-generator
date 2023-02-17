const mongoose = require('mongoose');
require('dotenv').config()

const connect=async()=>{
    return await mongoose.connect(process.env.mongoUrl,{useNewUrlParser: true})
}

module.exports = connect;
