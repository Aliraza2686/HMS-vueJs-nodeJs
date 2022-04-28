const express = require('express')
const auth = require('../auth/auth')
const Student = require('../models/studentModel')

const router = express.Router()
 
router.post('/add/bill/:id',auth , async(req, res) => {
    const id = req.params.id
    const {
        month,
        bill,
        isPayed,
        payedAt
    } = req.body
    const bil = {
        month,
        bill,
        isPayed,
        payedAt
    }
    try {
       const student = await Student.findById(id)
       if(!student) {
           return res.send({error : "Error occured"})
       }

    student.messBills.unshift(bil)
    await student.save()
    console.log(student)
       res.status(201).send({success : "Bill added successfully"})
    }catch(error){
        res.status(401).send({error : error.message})
    }
}) 

router.get('/bills/:id', auth, async(req, res) => {
    const id = req.params.id
    try {
     const student = await Student.findById(id)
     if(!student) {
         return res.send({error : "Student not found"})
     }
     res.status(201).send(student.messBills)
    }catch(error) {
    res.status(401).send({error : error.message})
    }
})

router.delete('/delete/bill/:id/:d', auth, async(req, res) => {
   const id = req.params.id
   const d = req.params.d

   try {
       const student = await Student.findById(id)
       const bil = student.messBills.find((b) => b.id === d)
       const index = student.messBills.indexOf(bil)
      student.messBills.splice(index, 1)
      await student.save()
      res.status(201).send({success : "Bill deleted successfully"})
   }catch(error) {
      res.status(401).send({error : error.message})
   }
})

router.get('/bill/:id/:bid', auth, async(req, res) => {
    const id = req.params.id
    const bid = req.params.bid

    try {
       const student = await Student.findById(id)
       const bil = student.messBills.find((b) => b.id === bid)
       console.log(bil)
       res.status(201).send(bil)
    }catch(error) {
       res.status(401).send({error : error.message})
    }
})

router.patch('/update/bill/:id/:bid', auth, async(req, res) => {
    const id = req.params.id
    const bid = req.params.bid
    const {
     month,
     bill,
     payedAt,
     isPayed
    } = req.body
    try {
     const student = await Student.findById(id)
     const bil = student.messBills.find((b) => b.id === bid)

      bil.month = month
      bil.bill = parseInt(bill),
      bil.payedAt = payedAt
      bil.isPayed = isPayed

      await student.save()
      res.status(201).send({success : "Bill updated successfully"})
    }catch(error) {
        res.status(401).send({error : error.message})
    }
})

module.exports = router