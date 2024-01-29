const mongoose = require("mongoose")
const dbConnect =  () => {
    console.log("Connecting...")


    mongoose.connect(process.env.MONGODB_URL, {
        dbName:"ayush"
    }).then(()=>{
        console.log("Database Connected");
    }).catch((er)=>{
        console.log("Connection Error: ", er);
        process.exit(1);
    })
    // try {
    //     await connect("mongodb://127.0.0.1:27017", {
    //         dbName: "test"
    //     });
    //     console.log("Database COnnected")
    // } catch (error) {
    //     console.log("COnnection Error ", error);
    // }
}

 // Named Export 
 exports.dbConnect = dbConnect; 

//  Default Export
// module.exports = dbConnect;
