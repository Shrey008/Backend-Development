 const express = require('express');
 const app = express();
 const cors = require('cors');

 app.get("/",function(req,res,next){
    res.send("hey")
 })


 //only this route will be share by this
 app.get("/shareable",cors(), function(req,res,next){
    res.send("hey")
 })

 app.listen(3000);