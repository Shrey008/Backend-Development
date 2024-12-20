const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path')
const userModel = require("./models/user-model");
const postModel = require("./models/post-model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/referencedb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Route to create a user
app.post("/created", async (req, res) => {
  try {
    const createdUser = await userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.send(createdUser);
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error: error.message });
  }
});

// Route to create a post for an existing user
app.post("/:username/created/post", async (req, res) => {
  try {
    let user = await userModel.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    let createdPost = await postModel.create({
      content: "fjlsfjslfsfjsldfj", 
      user: user._id,
    });

    user.posts.push(createdPost._id);
    await user.save();

    res.send({ user, createdPost });
  } catch (error) {
    res.status(500).send({ message: "Error creating post", error: error.message });
  }
});

app.get('/posts',async function(req,res){
    let posts = await postModel.find().populate("user");
    res.send(posts)
})

// app.get('/userr',async function(req,res){
//     let posts = await postModel.find().populate("posts");
//     res.send(users)
// })

// Start the server
app.listen(3005, () => {
  console.log("Server running on http://localhost:3000");
});


// app.post("/:username/created/post", async (req, res) => {
//   try {
//     let user = await userModel.findOne({ username: req.params.username });

//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }

//     user.posts.push({ content: "hello this is my  second post" });
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     res.status(500).send({ message: "An error occurred", error: error.message });
//   }
//});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});