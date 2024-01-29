const express = require("express");
require("dotenv").config();

const app = express();

// connection to the database 
const {dbConnect} = require("./config/database");
dbConnect();


// load config from env file 
const PORT = process.env.PORT || 4000;

// middleware to parse json request body 
app.use(express.json());


// imports routes for todo api 
const todoRoutes = require("./routes/todo");

// mount the todo api routes 
app.use("/api/v1", todoRoutes);


// start server  
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})






//default route
app.get("/", (req,res)=>{
    res.send(`<h1> this is homepage </h1>`);
})