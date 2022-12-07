const express = require('express')
const mongoose =require('mongoose')
const app = express()
const routesStud=require('./routes/student_routes')
const routeslogin=require('./routes/login')
const cors = require('cors')


mongoose.connect('mongodb://0.0.0.0:27017/student')
app.use(express.json())
app.use(cors())
app.use('/student',routesStud)
app.use('/login',routeslogin)
app.listen(5000, () =>{
    console.log('server is running')
})