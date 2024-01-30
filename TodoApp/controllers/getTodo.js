// import the model 

const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async(req,res) =>{
    try{
          // fetch all todos items form database 
          const todos = await Todo.find({
          });

          // response 
          res.status(200)
          .json({
            success:true,
            data:todos,
            message:"Entire Todo Data fetched",
          })           
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            data:"internal server error",
            message:err.message,
        })
    } 
}


exports.getTodoById = async(req,res) => {
    try {

        // extract todo items by id 
        const id = await req.params.id;
        const todo = await Todo.findById({_id: id})

        // if data for given id is not found 
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"NO data for found for given id ",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched `,
        })
       
    } catch (err) {
        console.error(err);
        res.status(500)
        .json({
            success: false,
            data:"internal server error by id",
            message:err.message
        })

        
    }
}