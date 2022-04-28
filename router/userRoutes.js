const express = require('express')
const User = require('../models/userModel')
const router = express.Router()
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const loginToken = (id) => {
    const token = jwt.sign({_id : id}, 'secret code')
    console.log(token._id)
    return token
}
router.post('/login', async(req, res) => {
    const {
        email,
        password
    } = req.body

    try{
     const user = await User.findOne({email})
     if(!user) {
         res.send({error : "invalid credentials"})
         return
     }
     const isMatch = await bcrypt.compare(password, user.password)
     if(!isMatch) {
         res.send({error : "Failed to login invalid credentials"})
         return
     }
     const token = loginToken(user.id)
     
     res.status(201).send(token)
    }catch(error) {
      res.status(401).send({error : error.message})
    }
})
router.get('/test', async(req, res) => {
    res.status(201).send({ message  : "ahmed raza"})
})

router.post('/register', async(req, res) => {
    const {
        name,
        email,
        password
    } = req.body
    try{
      const isRegistered = await User.findOne({email})
      if(password.length < 6) {
          res.send({error : "Password must be greater than 6 characters!"})
          return
      }
      if(isRegistered) {
          res.send({error : "User already exist!"})
          return
      }
      const hashedPassword = await bcrypt.hash(password, 8)
      const user = new User({
          name,
          email,
          password : hashedPassword
      })

      await user.save()
      const token = loginToken(user.id)

      res.status(201).send(token)
    }catch(error) {
      res.status(400).send({error : error.message})
    }
})

module.exports = router