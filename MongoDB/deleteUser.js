const express =  require('express');
const app = express();
const mongooseconnection = require("./config/mongoose")
const userModel = require("./models/user")
const debuglog = require("debug")("development:app");
const mongoose = require('mongoose');

app.get("/",function(req,res,next){
    res.send("hey");
})

app.get("/delete",async function(req,res){
    let user = await userModel.findOneAndDelete({username : "Shrey"});
     res.send(user);
     console.log("deletedd")
})

app.listen(3000);