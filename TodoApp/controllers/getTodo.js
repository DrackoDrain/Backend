// import the model 

const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async(req,res) =>{
    try{
          // fetch all todos items form database 
          const todos = Todo.find({});

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



 