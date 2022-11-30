const neas = require('../models/neas')
const express = require('express')
const router = express.Router()  //middelware par poder Crear/Acceder a rutas.


router.get('/', async (req, res) => {

    const neass = await neas.find({})  

    res.send(neass)
})

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
