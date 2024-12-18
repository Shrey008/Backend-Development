const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.render("index");
})

// app.get('/form',function(req,res){
//     console.log(req.query);
//     res.send("working");
// })

app.post('/create',function(req,res){
    console.log(req.body);
    res.send("working");
})

app.listen(3000);