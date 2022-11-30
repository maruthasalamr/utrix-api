const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbconfig = require('./config/db.config');
var cors = require('cors');
const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose
.connect(dbconfig.url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch(err => {
    console.log("Could not coonect to the database. Existing now...", err);
    process.exit();
})

app.get("/", (req,res) =>{
    res.json({message : "Welcome to API services"})
})

require("./app/routes/index.routes")(app);

app.listen(8081, () =>{
     console.log("Server is listening on port 8081");
});