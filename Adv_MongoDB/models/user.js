const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingadvDB");

const userSchema = mongoose.Schema({
    username :String,
    name :String,
    password :String,
    age : String,
    isMarried : Boolean,
    email :String,
    isAdmin : Boolean,
})

module.exports = mongoose.model("user",userSchema);