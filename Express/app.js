const express = require('express');
const app = express()

app.get('/',function(req,res){
    res.send("heyy bro");
})

app.listen(3000);