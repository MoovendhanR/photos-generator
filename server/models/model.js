import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{type:String, required:"true"},
    message:{type:String, required:"true"},
    creator:{type:String,required:"true"},
    tags:{type:[String]},
    selectedFile:{type:String},
    likeCount:{
        type:Number,
    },
    createdAt:{
        type:Date,
        required:"true",
        default:new Date()
    }
});

const postMessage = mongoose.model('postMessage',postSchema);

export default postMessage;