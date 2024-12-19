const express = require('express');
const app = express();


app.get('/check',function(req,res){
    res.send("working");
})

app.listen(3000);