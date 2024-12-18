const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render("index");
})

app.get('/profile',function(req,res){
    res.render("profile");
})

app.listen(3000);