const express = require('express')
const router = express.Router()
const signupinfo = require('../models/student_model')

//INSERT DATA
router.post('/signup', async (req,res)=>{
    const signupentry = new signupinfo({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        username:req.body.username,
        password:req.body.password,
    })
    signupentry.save()
})

//DISPLAY ALL RECORDS
router.get('/displaystud', async (req,res)=>{
    const data = await signupinfo.find()
    res.json(data)
})
//GET DATA BY ID
router.get('/getOneStudent/:id', async(req,res)=>{
    try{
        const data = await signupinfo.findById(req.params.id)
        res.json(data)

    }catch(error )
    {
        res.json({message:error.message})
    }
})


//UPDATE YOUR DATA
router.patch('/update/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const updateData = req.body
        const options = {new:true};
        const result  = await signupinfo.findByIdAndUpdate(id,updateData,options)
        res.send(result)
    }catch(error){
        console.log(error)
    }
})
//DELETE DATA
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const data= await signupinfo.findByIdAndDelete(id)
        res.send('Student data has been deleted!')
    }
    catch(error){
        res.json({message:error.message})
    }
})


module.exports = router;