const mongoose = require('mongoose')

const neasSchema = new mongoose.Schema({
    designation: {type: String} ,
    discovery_date: {type: String},
    h_mag:{type: Number} ,
    moid_au:{type: Number} ,
    q_au_1:{type: Number},
    q_au_2:{type: Number} ,
    period_yr:{type: Number},
    i_deg:{type: Number},
    pha:{type: String} ,
    orbit_class: {type:String}
});
//Crear const para crear conexion 
  const Neas = mongoose.model('Neas', neasSchema)

module.exports = Neas