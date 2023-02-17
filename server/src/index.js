import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import connect from "./config/db.js";
dotenv.config()
 
// import postRoutes from "./controllers/Post.controllers.js"
// import vendhanRoutes from "./controllers/Vendhan.controllers.js"

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));


// app.use("/api/v1/post",postRoutes)
// app.use("/api/v1/vendhan",vendhanRoutes)


const PORT = process.env.port || 5000

mongoose.set("strictQuery",true);
app.listen(PORT,async()=>{
    await connect();
    console.log(`Listening on port ${PORT}`)
})


 
//https://www.mongodb.com/cloud/atlas