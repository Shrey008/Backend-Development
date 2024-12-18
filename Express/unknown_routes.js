const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("something about home page")
})

app.get('/about',function(req,res){
    res.send("this is about page");
})

app.get("*",function(req,res){
  
    // * means all the other routes
    res.send("if nothing works i will")
})

app.listen(3000);

