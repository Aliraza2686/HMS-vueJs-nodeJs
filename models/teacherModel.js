const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  name : {
      type : String,
      required : true
  },
  department : {
      type : String,
      required : true
  },
  type : {
      type : String,
      required : true,
      enum : ["HOD", "Permanant", "CTI", "Daily Wages"]
  },
  phone : {
      type : String,
      required : true
  },
  dateJoined : {
      type : String,
      required : true
  },
  owner : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
  }
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher