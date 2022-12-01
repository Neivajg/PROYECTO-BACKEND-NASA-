const landing = require('../models/landing')
const express = require('express')
const router = express.Router()  //middelware par poder Crear/Acceder a rutas.

//Ruta para comprobaciones:
router.get('/', async (req, res) => {                      
   return res.send(await landing.find({}).select('name mass'))
})
// ACTIVIDAD 1. GET para obtener nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
// Ejemplo: /astronomy/landings?minimum_mass=200000​
    router.get('/',async (req,res)=>{
        const params=req.query
        if (params.minimum_mass){ 
             res.send(await landing.find({mass: {$gte: params.minimum_mass}}).select('name mass'))
        }else if (params.from && params.to){
            res.send(await landing.find({$and: [{fall: "Fell"}, {year: {$gte: params.from, $lte: params.to}}]}).select('name year mass'))
        }else if(params.to){
            res.send(await landing.find({year: {$lte: params.to}}).select('name year mass'))
        }else if(params.from){
            res.send(await landing.find({year: {$gte: params.from}}).select('name year mass'))
        }                             
    })     

// ACTIVIDAD 4. GET para obtener nombre, masa y fecha de todos los meteoritos caídos en determinadas fechas de la siguiente manera:​
// /astronomy/landings?from=1960
// /astronomy/landings?to=1990
// /astronomy/landings?from=1960&to=1990
    

// ACTIVIDAD 2. GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)​
// Ejemplo: /astronomy/landings/mass/200000​
    router.get('/:mass', async (req, res) => {
        const params= req.params.mass
        const mass2 = await landing.find({mass:{$gte: params }}) 
                                    .select ('mass name')

        res.send(mass2)
    })

//  ACTIVIDAD 3.GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)​
// Ejemplo: /astronomy/landings/class/L6​

    router.get('/class/:dat', async (req, res) => {
        const params= req.params.dat.toUpperCase();
        const mass3 = await landing.find({recclass : params }) 
                                    .select ('recclass name')

        res.send(mass3)
    })

//     POST Para crear un nuevo landing en el sistema. El objeto a crear tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo:

    router.post('/create',async (req,res)=>{
      console.log("CREADO")
        const create = new landing(req.body);
        const post= await create.save()
        res.send(post)
    })


    router.put('/edit/:id',async(req,res)=>{
        res.send(await landing.findOneAndDelete({id:req.params.id},req.body))
        console.log("EDITADO!");
    })

    router.delete('/delete/:id',async (req,res)=>{
       res.send( await landing.findOneAndDelete({id:req.params.id}))
       console.log("ELiminado")
    })
module.exports = router

