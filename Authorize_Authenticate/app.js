// const cookieParser = require('cookie-parser');
// const express = require('express')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const { func } = require('joi');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
// const app = express();
// app.use(cookieParser());

//setting a cookie

// app.get('/',function(req,res){
//     res.cookie("name","harsh");
//     res.send("done");
// })

//reading a cookie
// app.get('/read',function(req,res){
//     console.log(req.cookies.token);
//     res.send("read page")
// })

// app.get('/',function(req,res){
//    let token =  jwt.sign({email:"Shrey@gmail.com"},"secret")  /// the secret should be a random string not like this because data will be encrypted by this
//    res.cookie("token",token)
//    console.log(token)
// })

// app.get('/data',function(req,res){
//     let data = jwt.verify(req.cookies.token,"secret");
//     console.log(data);
// })

//bcrypt 
// app.get('/hey',function(req,res){
//     bcrypt.genSalt(saltRounds, function(err, salt) {
//         bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//             // Store hash in your password DB.
//             console.log(hash)
//         });
//     });
// })

// 
// app.listen(3005);

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const userModel = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
const path = require('path');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser());
app.get('/',function(req,res){
    res.render("index")
}) 


app.post('/create', function(req,res){
    let{username,email,password,age} =req.body 
  
    bcrypt.genSalt(10,(err,salt)=>{
         bcrypt.hash(password, salt, async (err, hash)=>{
            let createduser =  await userModel.create({
                username,
                email,
                password :hash,
                age
             })

           let token = jwt.sign({email},"shhhhhhhhhhh")
            res.cookie("token",token);
           res.send(createduser);
         })
    })

    
     
}) 

app.get("/logout",function(req,res){
    res.cookie("token","");
    res.redirect("/");
})

app.get("/login",function(req,res){
    res.render('login')
})

// Login route
app.post('/login', async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) return res.send('something is wrong');
  
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) return res.send('something is wrong');
        if (result) {
          const token = jwt.sign({ email: user.email }, 'shhhhhhhhhhh');
          res.cookie('token', token);
          res.send('yes you can login');
        } else {
          res.send('something is wrong');
        }
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }); 
 
     
       
  



app.listen(3000);


 
