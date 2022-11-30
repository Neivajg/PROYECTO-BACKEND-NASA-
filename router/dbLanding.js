    const landing = require('../models/landing')
    const express = require('express')
    const router = express.Router()  //middelware par poder Crear/Acceder a rutas.

//GET para obtener nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
// Ejemplo: /astronomy/landings?minimum_mass=200000​
    router.get('/', async (req, res) => {
    
        const landings = await landing.find({}) 
                                    //   .sort('mass')
                                      .select ('mass')
    
        res.send(landings)
    })
    
    router.get('/', async (req, res) => {
    
        const landings = await landing.find({})  
    
        res.send(landings)
    })

// GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)​
// Ejemplo: /astronomy/landings/mass/200000​
// GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)​
// Ejemplo: /astronomy/landings/class/L6​
// GET para obtener nombre, masa y fecha de todos los meteoritos caídos en determinadas fechas de la siguiente manera:​
// /astronomy/landings?from=1960&to=1990
// /astronomy/landings?from=1960
// /astronomy/landings?to=1990
// El mismo endpoint deberá ser compatible con las 3 formas
    // router.post('/', async (req, res) => {
    //     const movie = new Movie(req.body)
    
    //     const newMovie = await movie.save()
    
    //     res.send(newMovie)
    // })
    
    // router.put('/:id', async (req, res) => {
    //     const movie = await Movie.findOneAndUpdate({_id: req.params.id}, req.body)
    
    //     res.send(movie)
    // })
    
    // router.delete('/:id', async (req, res) => {
    //     const movie = await Movie.findOneAndDelete({_id: req.params.id})
    
    //     res.send(movie)
    // })
    
    module.exports = router

