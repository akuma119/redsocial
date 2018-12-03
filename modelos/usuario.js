var mongoose = require("mongoose")

var esquemaUsuario = mongoose.Schema({
  nombre: String,
  mail: String,
  pass: String,
  img: String,//binData,
  nivel: Number
})
/*EsqUsuario = mongoose.model('Usuario', esquemaUsuario)

function Usuario(objUsuario) {

  this.modelo = new EsqUsuario({
    nombre: objUsuario.nombre,
    mail: objUsuario.mail,
    pass: objUsuario.pass,
    img: objUsuario.img,
    nivel: objUsuario.nivel
  })

this.guardar = function () {
    this.modelo.save().then(usr => console.log("usuario guardado: ",usr))
  }
}
module.exports = Usuario*/
module.exports = mongoose.model('Usuario', esquemaUsuario)
