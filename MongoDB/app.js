// const express = require('express')
// const app = express();
 const mongooseconnection = require("./config/mongoose")

// app.get('/',function(req,res,next){
//     res.send("hey")
// })

// app.listen(3000);

// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// mongoose.connect("mongodb+srv://testuser:DaTimXFrB2gue68f@cluster2.mgi68.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2").then(function(){
//     console.log("connected to server");
// });

const express =  require('express');
const app = express();
 
const userModel = require("./models/user")
const debuglog = require("debug")("development:app");
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended :true}))

//user creation in postman 

app.post("/create", async function(req,res,next){
    let {name,email,username,password} = (req.body);
    
    let createduser = await userModel.create({
            name,
            username,
            email,
            password
    })
   res.send(createduser)
 })

 app.get("/users",async function(req,res){
    let users = await userModel.find();
    res.send(users);
 })

 app.get("/users/:username",async function(req,res){
    let user = await userModel.findOne({username : req.params.username});
    res.send(user);
 })

 app.get("/update/:username",async function(req,res){
    let {name,email,password,username} =req.body;
    let user = await userModel.findOneAndUpdate({username : req.params.username}, {username,name,email},{new : true});
    res.send(user);
 })

 app.get("/delete/:username",async function(req,res){
    let deleteduser = await userModel.findOneAndDelete({username : req.params.username});
    res.send(deleteduser);
 })
 


app.get('/',function(req,res){
    res.send("hey");
})

// app.get('/create',async function(req,res,next){
//   let createduser = await userModel.create({
//         username : "Shrey",
//         name : "Shreyansh",
//         email : "shrey@gmail.com",
//         password:"pass",

//     })
//     debuglog("user created");
//     res.send(createduser)
// })



app.listen(3000);