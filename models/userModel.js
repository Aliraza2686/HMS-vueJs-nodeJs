const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name : {
      type : String,
      required : true
  },
  email : {
      type : String,
      required : true,
      trim : true,
      unique : true,
      validate(value) {
          if(!validator.isEmail(value)) {
             throw new Error({ error : "invalid email format"})
          }
      }
  },
  password : {
      type : String,
      required : true,
      minlength : 6
  },
  isAdmin : {
      type : Boolean,
      default : false
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User