const express = require("express");

const app = express();


require("dotenv").config();

// connect with db 
const dbconnect = require("./config/database");
dbconnect();



// load config from env file
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

const blog = require("./routes/blog")


// mount 
app.use("/api/v1", blog);



//start the server

app.listen(PORT, ()=>{
    console.log(`App is started at port no ${PORT}`);

})

// default route 

 app.get('/',()=>{
    console.log(`<h1> This is homepage </h1>`)
 })


