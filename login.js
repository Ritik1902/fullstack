const express = require('express')
const router = express.Router()
const logininfo = require('../models/student_model')

router.post('/login', async (req,res)=>{
    if(req.body.username && req.body.password){
        let loginchk=await logininfo.findOne(req.body).select('-password')
        if(loginchk)
        {
            res.send(loginchk)
        }else{
            res.send({result:"Invalid username or Password"})
        }
    }else
    {
        res.send({result:"inavlid username or password"})
    }
})

module.exports=router