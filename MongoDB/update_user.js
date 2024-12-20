const express =  require('express');
const app = express();
const mongooseconnection = require("./config/mongoose")
const userModel = require("./models/user")
const debuglog = require("debug")("development:app");
const mongoose = require('mongoose');

app.get("/",function(req,res){
     res.send("hey");
})

app.get("/update",async function (req,res,next){
    let user = await userModel.findOneAndUpdate({name : "Shreyansh"},{name:"Shreyansh Hirkane"}, {new: true});
    res.send(user);
})




app.listen(3000);