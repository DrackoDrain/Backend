const Post = require("../models/postModel");


exports.createPost  = async (req, res) =>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title,body
        })

        const savedPost = await post.save();

        res.json({
            post:savedPost,
        })


    }
    catch(error){
        console.error(err);
        res.status(400).json({
            success:false,
            message:"Error while creating Post",
        })
    }
}

// exports.getAllPosts = async (req,res) =>{
//     try{

//         const posts = await Post.find().populate("likes").populate("comments").exec();
//         res.json({
//             post:posts,
//         })

//     }
//     catch(err){
//         console.error(err);
//         res.status(400).json({
//             success:false,
//             message:"Error while fetching Post",
//         })
//     }
// }
