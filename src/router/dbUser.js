const user = require('../models/user')
const express= require('express')
const router = express.Router()

router.post('/Create', async(req,res)=>{
    const create= new user(req.body)
    res.send(await create.save())     
  })

// GET para obtener todos los usuarios​
// Ejemplo: /users​
    // router.get('/',async(req,res)=>{
   
    //     res.send(await user.find({}))
    //     })
// GET para obtener usuario por email​
// /users?email=usuarioprueba@gmail.com
    router.get('/',async(req,res)=>{
        if(req.query.email){
            res.send(await user.find({email:req.query.email}).select('name email'))   
        }else if(req.query){
            res.send(await user.find({}))
        }                     
    })

    router.put('/edit/:email',async(req,res)=>{
       res.send(await user.findOneAndUpdate({email:req.params.email},req.body))
    })

    router.delete('/delete/:email',async (req,res)=>{
       res.send( await user.findOneAndDelete({email:req.params.email}))
    })
module.exports = router