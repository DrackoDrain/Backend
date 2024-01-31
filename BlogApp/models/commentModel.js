const mongoose = require("mongoose");


// route handler 
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",  // this is a reference to the post model 
        required:true,
    },
    user:{
        type: String,
        required:true,
    },
    body:{
        type: String, 
        required: true,
    }
});


// export 

module.exports = mongoose.model("comments", commentSchema)

