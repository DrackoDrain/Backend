// import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business logic

exports.createComment = async (req, res) => {
    try {
        // fetch data form req body 
        const { post, user, body } = req.body;
        // create a comment object 
        const comment = new Comment({
            post, user, body
        });

        // save the new comment into the data base 
        const savedComment = await comment.save();

        // find the post by ID, and the new comment to its comments array 
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: { comments: savedComment._id } }, { new: true })
            .populate("comments") // Populates the comments array with comment documents
            .exec();

        res.json({
            Post: updatedPost,
        });

    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Error while creating comment",
            // error: "Error while creating comment",
            
        });

    }
}