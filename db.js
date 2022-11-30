// Creamos un conexion global

const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/NASA')
    .then(() => console.log("Conectado a mongodb..."))
    .catch(() => console.log("ERROR FATAL: ", err))
}

//Otra forma de hacer la conexión es con try{}catch{}
