// import models 

const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post 

exports.likePost = async (req,res)=>{
    try
    {
        const {post,user} = req.body;

        const like = new Like({
            post,user
        });
        const savedLike = await like.save();

        // update a post 

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true})
        .populate("likes").exec();

        res.json({
            post:updatedPost,
        })
    

    }
    catch(err){
        // console.error(err);
        res.status(400).json({
            success:false,
            message:"Error while Liking Post",
        })

    }


}


// Unlike a post

exports.unlikePost = async (req,res) => {
    try{
        const {post,like} = req.body;

        // find and delete the like from collection 

        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        // update the post collection -> delete

        const updatedLike = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new:true});

        res.json({
            post:updatedPost,
        })

    }
    catch(err){
        // console.error(err);
        res.status(400).json({
            success:false,
            message:"Error while Liking Post1",
        })

    }
}