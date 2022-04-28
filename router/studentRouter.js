const express = require('express')
const router = express()
const auth = require('../auth/auth')

const Student = require('../models/studentModel')

router.post('/add/student', auth ,async(req, res) => {
  const user = req.user

  const {
      name,
      rollNo,
      className,
      department, 
      memberSince,
      phone,
      location,
      parentsNo,
      hostel,
      shift
  } = req.body

  try{
    const student = new Student({
        name,
        rollNo,
        className,
        department,
        memberSince,
        phone,
        location,
        parentsNo,
        hostel,
        shift,
        owner : user.id
    })

    await student.save()

    res.status(201).send("Student added successfully")
  }catch(error) {
    res.status(500).send({error : error.message})
    console.log(error)
  }
})

router.get('/all/students', auth, async(req, res) => {
  try{
    const students = await Student.find({owner : req.user.id})
    res.status(201).send(students)
  }catch(error) {
   res.status(401).send({error : error.message})
  }
})
router.get('/students/:department', auth, async(req, res) => {
  const department = req.params.department

  try{
    const students = await Student.find({owner : req.user._id, department : department})
    
    if(!students) {
      return res.send({error : "No student found"})
    }
    res.status(201).send(students)
  }catch(error) {
    res.status(400).send({error : error.message})
  }
})

router.get('/student/:id', auth, async(req, res) => {
   const id = req.params.id
   try{
     const student = await Student.findOne({owner : req.user._id, id : id})
     if(!student) {
       return res.send({error : "No student found"})
     }
     res.status(201).send(student)
   }catch(error) {
     res.status(400).send({error : error.message})
   }
})

router.delete('/delete/student/:id', auth, async(req, res) => {

  const id = req.params.id
  try{
   const student = await Student.findByIdAndDelete(id)
   res.status(201).send({success : "student deleted successfully"})
  }catch(error) {
    res.status(401).send({error : error.message})
  } 
})

router.patch('/update/student/:id', auth, async(req, res) => {
  const id = req.params.id
  const {
    name,
    rollNo,
    className,
    department, 
    memberSince,
    phone, 
    location,
    parentsNo,
    hostel,
    shift
  } = req.body
  try{
     const student = await Student.findByIdAndUpdate(id, {
      name,
      rollNo,
      className,
      department, 
      memberSince,
      phone,
      location,
      parentsNo,
      hostel,
      shift
     }, {
       new : true,
       runValidators : true
     })

     await student.save()
     res.status(201).send({success : "student updated successfully"})

  }catch(error) {
    res.status(401).send({error : error.message})
  }
})

router.get('/search/:term', auth, async(req, res) => {
  const term = req.params.term
  try {
    const students = await Student.find({owner : req.user.id})

    const filtered = students.filter((std) => std.name.includes(term))
     const len = filtered.length
     console.log(len)
     if(len <= 0) {
       res.send({error : "No match found"})
       return
     }
    res.status(201).send(filtered)
  }catch(error){ 
   res.status(401).send({error : error.message})
  }
})

module.exports = router