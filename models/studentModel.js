const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name : {
      type : String,
      required : true
  },
  rollNo : {
      type : Number,
      required : true
  },
  className : {
      type : String,
      required : true,
      enum : ["part_One", "part_two","BS"]
  },
  shift : {
     type : String,
     required : true,
     enum : ["Morning", "Evening"]
  },
  department : {
      type : String,
      required : true,
      enum : ["ICS", "Pre_Medical", "Pre_Eng", "FA", "Chemistry", "IT", "ECO", "English"]
  },

  memberSince : {
    type : String,
    required : true,
  },
  phone : {
      type : Number,
      required : true
  },
  location : {
      type : String,
      required : true
  },
  parentsNo : {
      type : String,
      required : true
  },
  hostel : {
      type : String,
      enum : ["New Hostel", "Old Hostel"],
      required : true
  }, 
  messBills : [
    {
        month : {
            type : String,
            required : true,
            enum : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          },
       
          bill : {
              type : Number,
              required: true,
          },
          isPayed : {
              type : Boolean,
              required : true,
              default :false
          },
          payedAt : {
              type : String,
              required : true
          }
    }
],
  owner : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
  }
}, {
    timestamps : true
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
