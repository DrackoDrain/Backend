const Todo = require("../models/Todo");


exports.deleteTodo = async (req,res)=>{
    try{
        const {id} = req.params;

        await Todo.findOneAndDelete(id);

        res.json({
            success:true,
            message :"Todo Deleted",
        })

        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            message:"Error in Deletion",
        })

    }
}