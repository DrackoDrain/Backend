const Post = require("../models/postModel");
const likes = require("../models/likeModel");

exports.getAllPosts = async (req,res) =>{
    try{

        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            post:posts,
        })

    }
    catch(err){
        console.error(err);
        res.status(400).json({
            success:false,
            message:"Error while fetching Post",
        })
    }
}
