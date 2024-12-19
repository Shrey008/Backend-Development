const express = require('express');
const app = express();

app.get('/api/testing/development',(req,res)=>{
    res.send("hey")
})

app.listen(3000);