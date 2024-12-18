const express = require('express');
const app = express();

app.get('/',function(req,res,next){
    res.send("something about the main page");
})

app.get('/about',function(req,re){
    res.send("something about the about page");
})

app.get('/author/:username/:age',function(req,res){
    res.send(`something about ${req.params.username}whose age is ${req.params.age}`);
})

app.listen(3000);


