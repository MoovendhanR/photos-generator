import postMessage from "../models/model.js"



export const getPosts = async(req, res) => {
    try {
       const postMessages =await postMessage.find().lean().exec();
    //    console.log(postMessages);
       res.status(200).send(postMessages);
    }catch (error) {
       res.status(404).send({ message:error.message });
    }
}

export const createPost = async(req, res) => {
      try{
        const postmessage = await postMessage.create(req.body);
        res.status(200).send(postmessage);
      }catch(err){
        res.status(500).send({ message:err.message });
      }
}