const express = require('express');
const app = express();
const expressSession = require('express-session');

app.use(expressSession({
    secret:"random stuff",
    resave:false,
    saveUninitialized:false
}))

app.get('/',function(req,res,next){
    res.send("hey");
})

app.get('/create',function(req,res,next){
    req.session.polo = true;
    res.send =("done");
})

app.get('/check',function(req,res,next){
    console.log(req.session.polo);
})

app.listen(3000);