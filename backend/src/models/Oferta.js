const mongoose = require('mongoose')

const ofertaSchema = new mongoose.Schema({
    id_oferta: String,
    empresa: String,
    localidad: String,
    sector: String,
    titulo: String,
    descripcion: String,
    salario: String,
    fecha_alta: String,
    fecha_limite: String,
    estado: Boolean
})

module.exports = mongoose.model('Oferta', ofertaSchema)