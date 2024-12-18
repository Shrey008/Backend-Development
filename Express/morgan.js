const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan("combined"));

app.get('/',function(req,res,next){
    res.send("hey");
})

app.listen(3000);