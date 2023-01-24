import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:{type:String, required:"true"},
    message:{type:String, required:"true"},
    creator:{type:String,required:"true"},
    tags:{type:[String]},
    selectedFile:{type:String,required:"true"},
    likeCount:{
        type:Number,
        required:"true"
    },
    createdAt:{
        type:Date,
        required:"true",
        default:new Date()
    }
},  {
    versionKey: false,
    timestamps: true,
  });

const postMessage = mongoose.model('postMessage',postSchema);

export default postMessage;