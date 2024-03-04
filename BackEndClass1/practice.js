const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("HELLO this is ayush aryan ");
})

app.listen(4000, ()=>{
    console.log(" 4000 port is running ");

})


app.post('/api/companies', (req, res) =>{
    const {
        name = "Gucci",
        name1 = "Chanel"
    } = req.body;
    console.log(name)
    console.log(name1)   

    res.send("Companies get successfully");
})