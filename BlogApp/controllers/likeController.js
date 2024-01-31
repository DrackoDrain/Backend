const commentModel = require("../models/commentModel")

exports.dummyLink = async(req,res)=>{

    const comments = await commentModel.find().populate("post")
    res.json(comments)
}