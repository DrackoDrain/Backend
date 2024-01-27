// npm init -y
// npm i express
// create server.js
// node server.js  -(run the code)



// server initiate 
const express = require("express");

const app = express();


// Used to parse req.body in express -> PUT or POST 
const bodyParser = require("body-parser");

// Specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


// activate the server at 3000 port
app.listen(3000, () => {
    console.log("Server started at Port Number 3000 ")
});


// Routes 
app.get('/',(req,res)=>{
    res.send("Hello Ji This is Aryan");
})


app.post('/api/cars', (request, response)=>{
    const  {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})
