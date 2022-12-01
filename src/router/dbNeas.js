const neas = require('../models/neas')
const express = require('express')
const router = express.Router()  //middelware par poder Crear/Acceder a rutas.

// GET para obtener la designación y el período anual en base a la clase orbital del asteroide (con query params)​
// Ejemplo: /astronomy/neas?class=aten​

    router.get('/',async(req,res)=>{
     res.send(await neas.find({orbit_class:req.query.aten}).select('designation period_yr')) 
    })
// GET para obtener designación, fecha y período anual de todos los asteroides que cumplan el filtro de fechas dadas​

router.get('/', async (req, res) => {
const params= req.query
if(params.from && params.to){
    const neass = await neas.find({}) 
     res.send(neass)
}else if(params.form){

}else if(params.to){
    
}

})
// /astronomy/neas?from=2010&to=2015
// /astronomy/neas?from=2010
// /astronomy/neas?to=2015
// En este caso, además, podremos poner la fecha más específica si quisiéramos:
// YYYY-MM-DD
// YYYY-MM
// YYYY
// El endpoint debe ser compatible con los 3 casos


// POST Para crear un nuevo NEA en el sistema. El objeto a crear tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo:
    
    router.post('/create',async (req,res)=>{
        const create = new neasSchema(req.body);
        const post= await neas.save()
        res.send(post)
    })

// PUT Para editar un NEA en el sistema. Búsqueda para editar por designation. El objeto a editar tendrá los mismos campos como los documentos proporcionandos en MongoDB como ejemplo.
    router.put('/edit/:designation',async(req,res)=>{
        const edit= await neas.findOneAndUpdate({designation:req.params.designation},req.body)

        res.send(edit)

    })

// DELETE Para borrar un NEA del sistema. Búsqueda para borrar por designation.
// Ejemplo: /astronomy/neas/delete
    router.delete('/delete/:designation',async (req,res)=>{
        const eliminado= await neas.findOneAndDelete({designation:req.params.designation})

        res.send(eliminado)

    })

module.exports = router
