const express = require('express')
const cors = require('cors')

const userRouter = require('./router/userRoutes')
const studentRouter = require('./router/studentRouter')
const billRouter = require('./router/billRoutes')
const teacherRouter = require('./router/teacherRoutes')

require('./database/db')
const app = express()
app.use(cors({
    origin : "http://localhost:8080",
    credentials : true
}))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(userRouter)
app.use(studentRouter)
app.use(billRouter)
app.use(teacherRouter)

const port = process.env.PORT || 3000

const jwt = require('jsonwebtoken')
const token = jwt.sign({_id : 'aliraza'}, 'secret')
console.log(token.id)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})