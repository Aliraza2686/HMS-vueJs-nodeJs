const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = (req, res, next) => {
    const token = req.header('Authorization')
   
    if(!token) {
        res.status(401).send("please authorize")
    }
    if(token) {
        jwt.verify(token, 'secret code', async (err, decodedToken) => {
           if(err) {
               res.status(401).send("authorization required")
               return
           }else {
               const user = await User.findById(decodedToken)
               req.user = user
               next()
           }
        })
    }
 }

module.exports = auth