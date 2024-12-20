const mongoose = require('mongoose');
const Joi = require('joi');
 mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

 const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      index: true,
      trim :true
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim :true
    },
    age: {
      type: Number,
      required: [true, 'Age is required']
    },
    contact: {
      type: Number,
      required: [true, 'Contact number is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    }
});

    function validateModel(data){
        const Joi = require('joi');

const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .trim(),

  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .trim(),

  age: Joi.number()
    .integer()
    .min(0)
    .max(120)
    .required(),

  contact: Joi.number()
    .integer()
    .min(1000000000)
    .max(9999999999)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .lowercase()
    .required()
     

   
});

  let {error} = schema.validate(data)
  return error;
}

module.exports.userModel = mongoose.model("User",userSchema);
module.exports.validateModel = validateModel;
      
        
    
  
  