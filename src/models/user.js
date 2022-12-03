const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 name : {type: String, required:true},
 nickname: {type: String},
 email: {type: String},
 picture:{type: String},
 affiliatedNumber: {type: String, required:true, Unique:true },
 affiliationDate: {type: Date},
 occupation: {type: String},
 birthdate :{type: String},
 neasDiscovered: {type:Array} 
})

//Crear const para crear conexion 
  const User = mongoose.model('User', userSchema)

module.exports = User