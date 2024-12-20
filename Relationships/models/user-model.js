const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/referencedb");
// const postSchema = mongoose.Schema({
//     content :String,
//     date:{
//         type: Date,
//         default : Date.now(),
//     } 
// })
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,ref:"Post"}],
});

 
module.exports = mongoose.model("User", userSchema);

 // {
    //   content: String,
    //   date: {
    //     type: Date,
    //     default: Date.now,
    //   },
    // },