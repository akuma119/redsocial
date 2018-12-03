var mongoose = require("mongoose")

var esquemaPublicacion = mongoose.Schema({
  user: String,
  texto: String,
  fecha: Date
  //,imagen: BinData
})
module.exports = mongoose.model('Publicacion', esquemaPublicacion)
