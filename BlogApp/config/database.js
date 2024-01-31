const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {

    console.log("connnecting")
    mongoose.connect(process.env.DATABASE_URL,{
        dbName:"blogAppDataBase"
    })
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log("Connection Error");
        console.log(err);
        process.exit(1);
    })

};

module.exports = dbconnect;