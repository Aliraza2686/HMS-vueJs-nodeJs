const express = require('express')
const auth = require('../auth/auth')
const Teacher = require('../models/teacherModel')

const router = express.Router()

router.post('/add/teacher', auth, async(req, res) => {
    const {
        name,
        department,
        type,
        phone,
        dateJoined
    } = req.body
    try {
       const teacher = new Teacher({
           name,
           department,
           phone,
           dateJoined,
           type,
           owner : req.user.id
       })
       await teacher.save()
       res.status(201).send({success : "Teacher saved successfully"})
    }catch(error) {
       res.status(401).send({error : error.message})
    }
})

router.get('/all/teachers', auth, async(req, res) => {
    try {
        const teachers = await Teacher.find({owner : req.user.id})

        res.status(201).send(teachers)
    }catch(error) {
        res.status(401).send({error: error.message})
    }
})

router.get("/test", auth, (req, res) => {
  res.send("success")
})

router.delete('/delete/teacher/:id', auth, async(req, res) => {
    try {
      const teacher = await Teacher.findByIdAndDelete(req.params.id)
      res.status(201).send({success : "Teacher deleted successfully"}) 
    }catch(error) {
      res.status(401).send({error : error.message})
    }
})

router.patch('/update/teacher/:id', auth, async(req, res) => {
    const id = req.params.id
    const {
        name,
        department,
        type,
        phone,
        dateJoined
    } = req.body

    try {
      const teacher = await Teacher.findByIdAndUpdate(id, {
        name,
        department,
        type,
        phone,
        dateJoined
      }, {
          new : true,
          runValidators : true
      })
      await teacher.save()
      res.status(201).send({success : "teacher credentials updated successfully"})
    }catch(error) {
      res.status(401).send({error : error.message})
    }
})

router.get('/teacher/:id', auth, async(req, res) => {
  const id = req.params.id
  try {
    const teacher = await Teacher.findById(id)
    res.status(201).send(teacher)
  }catch(error) {
     res.status(401).send({error : error.message})
  }
})
module.exports = router