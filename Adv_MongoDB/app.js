const express = require('express');
const app = express();
const userModel = require("./models/user")

const dummyData = ([
    {
        username: "user1",
        name: "John Doe",
        password: "pass123",
        age: "25",
        isMarried: false,
        email: "john.doe@example.com"
    },
    {
        username: "user2",
        name: "Jane Smith",
        password: "securepass",
        age: "30",
        isMarried: true,
        email: "jane.smith@example.com"
    },
    {
        username: "user3",
        name: "Michael Brown",
        password: "mike2023",
        age: "28",
        isMarried: false,
        email: "michael.brown@example.com"
    },
    {
        username: "user4",
        name: "Emily Davis",
        password: "emilyd",
        age: "24",
        isMarried: false,
        email: "emily.davis@example.com"
    },
    {
        username: "user5",
        name: "Chris Wilson",
        password: "chrisW",
        age: "35",
        isMarried: true,
        email: "chris.wilson@example.com"
    },
    {
        username: "user6",
        name: "Sarah Lee",
        password: "sarahpass",
        age: "29",
        isMarried: false,
        email: "sarah.lee@example.com"
    },
    {
        username: "user7",
        name: "David Clark",
        password: "daveC",
        age: "40",
        isMarried: true,
        email: "david.clark@example.com"
    },
    {
        username: "user8",
        name: "Laura Taylor",
        password: "lauraT",
        age: "27",
        isMarried: false,
        email: "laura.taylor@example.com"
    },
    {
        username: "user9",
        name: "James Moore",
        password: "jamesM",
        age: "33",
        isMarried: true,
        email: "james.moore@example.com"
    },
    {
        username: "user10",
        name: "Olivia White",
        password: "olivia123",
        age: "22",
        isMarried: false,
        email: "olivia.white@example.com"
    },
    {
        username: "user11",
        name: "Ethan Hall",
        password: "ethanH",
        age: "26",
        isMarried: false,
        email: "ethan.hall@example.com"
    },
    {
        username: "user12",
        name: "Sophia Green",
        password: "sophiapass",
        age: "31",
        isMarried: true,
        email: "sophia.green@example.com"
    },
    {
        username: "user13",
        name: "Liam Adams",
        password: "liamA",
        age: "29",
        isMarried: false,
        email: "liam.adams@example.com"
    },
    {
        username: "user14",
        name: "Isabella Nelson",
        password: "bellaN",
        age: "21",
        isMarried: false,
        email: "isabella.nelson@example.com"
    },
    {
        username: "user15",
        name: "Noah Carter",
        password: "noahC",
        age: "34",
        isMarried: true,
        email: "noah.carter@example.com"
    }
])
     


app.get('/',function(req,res){
    res.send("working")
})

//creation of many users

app.get('/createmany',async function(req,res){
   let data =  await userModel.insertMany(dummyData);
   res.send(data);
})

//equal operator in mongodb finding exact match
app.get("/users",async function(req,res){
    let users = await userModel.find({age:{$eq: 25} });
    res.send(users);
})

app.get("/user",async function(req,res){
    let users = await userModel.find({age:{$ne: 35} });
    res.send(users);
});
 
//this will give age less than 35

app.get("/lt",async function(req,res){
    let users = await userModel.find({age:{$lt: 35} });
    res.send(users);
});

// less than or EQUAL TO AGE
app.get("/lessthanequal",async function(req,res){
    let users = await userModel.find({age:{$lte: 25} });
    res.send(users);
});
//this will give greater than 25

app.get("/greaterthan",async function(req,res){
    let users = await userModel.find({age:{$gt: 25} });
    res.send(users);
});

//this will give greater than equal age

app.get("/greaterthanequal",async function(req,res){
    let users = await userModel.find({age:{$gt: 25} });
    res.send(users);
});

//if present in this ages it show that data 

app.get("/in",async function(req,res){
    let users = await userModel.find({age:{$in :[25,30] } });
    res.send(users);
});
//if does not belongs retreives

app.get("/nin",async function(req,res){
    let users = await userModel.find({isMarried:{$nin :[false] } });
    res.send(users);
});

app.get("/exists",async function(req,res){
    let users = await userModel.find({isAdmin:{$exists:false } });
    res.send(users);
});

app.get("/and",async function(req,res){
    let users = await userModel.find({$and:[{isMarried : false},{age:{$gte : 25 }}]});
    res.send(users);
});


app.get("/or",async function(req,res){
    let users = await userModel.find({$or:[{isMarried : true},{age:{$gte : 25 }}]});
    res.send(users);
})

app.get("/regexp",async function(req,res){
    let users = await userModel.find({name:{$regex: /^j.*on$/i}});
    res.send(users);
})



app.listen(3000);