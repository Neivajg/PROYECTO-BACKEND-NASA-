//Creamos un modelo para la base de datos landing
//1)Primero de todo inicializamos el proyecto (npm init)=> Intalamos las dependencias para requerirlas, en este caso: npm i mongoose.
//2)Requerimos la librería express, ya que requeriremos middelware de esta librería
//Añadir los json (lading.json y neas.json)como colecciones en la bd compas mongonDB.
const mongoose = require('mongoose')

const landingSchema = new mongoose.Schema({
    name: {type: String} ,
    id: {type: String},
    nametype:{type: String} ,
    recclass:{type: String} ,
    mass:{type: String},
    fall:{type: String} ,
    year:{type: String},
    reclat:{type: String},
    reclong:{type: String} ,
    geolocation: {
      latitude: String , 
      longitude: String
    }
  });
//Crear const para crear conexion 
  const Landing = mongoose.model('Landing', landingSchema)

module.exports = Landing




