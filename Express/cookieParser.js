const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", function (req, res, next) {
    res.send("hey");
});

app.get("/check",function(req,res,next){
    console.log(req.cookies.banned);
    res.send("checking");
})

//setting a cookie

app.get('/banned', function (req, res, next) {
    res.cookie("banned", "true");
    res.send("Cookie 'banned' has been set.");
});

app.listen(3000);
