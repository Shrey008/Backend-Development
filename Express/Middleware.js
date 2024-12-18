const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("hey bro");
    next(); 
})

app.get('/',function(req,res){
    res.send("something about home page")
})

app.get('/about',function(req,res){
    res.send("this is about page");
})

app.listen(3000);