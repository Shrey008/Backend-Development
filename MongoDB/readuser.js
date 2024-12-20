const express =  require('express');
const app = express();
const mongooseconnection = require("./config/mongoose")
const userModel = require("./models/user")
const debuglog = require("debug")("development:app");
const mongoose = require('mongoose');

app.get("/",function(req,res){
    res.send("hey");
})

app.get("/read",async function (req,res){
    let user = await userModel.findOne({name : "Shreyansh"});
    debuglog("readed");
    res.send(user);
})


    
app.listen(3000);