// import the models

const Todo = require("../models/Todo");


// define route handler 

exports.updateTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate({_id:id}, {title, description, updateAt: Date.now()})

        res.status(200).json({
            success:true,
            data:todo,
            message:`Updated successfully`
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            err:err.message,
            message:`Server Error`
        })
        
    }

}