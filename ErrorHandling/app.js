const express = require('express');
const app = express();

app.get('/',function(req,res,next){
    try{
        res.send(hey);

    }
   catch(err){
    next(err);
   }
})

app.use((err,req,res,next)=>{
    res.status(500).send("hey is not defined");
})

app.listen(3000);