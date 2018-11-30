var express = require('express')
var router = express.Router()
var bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

// base de datos
var mongodb = require("mongodb")
var mongoose = require("mongoose")
var uri = "mongodb+srv://tato:faster4me@clusterredsocial-q5xoj.mongodb.net/redsocial?retryWrites=true"
//var uri = "mongodb://localhost:27017/redsocial"
mongoose.connect(uri,  { useNewUrlParser: true }).catch(err => {console.log("error al conectar:",err)})
var Publicacion = require("../modelos/publicacion.js")


router.get('/', (req,res) => {
  Publicacion.find({}).then( pub => {
    //console.log(pub)
    //res.status(200).json(pub)
    res.render("noticias", {listaPublicaciones: pub})
  }).catch( error => {
    console.log("error al consultar:",error)
    var pubError = [{
      user: "",
      fecha: Date.now(),
      texto: "no hay conexion con la base de datos :("
    }]
    res.render("noticias", {listaPublicaciones: pubError})
  })
  //res.render("noticias")//, {cont: "cargando publicaciones..."})
})
/*router.get("/actualizar", (req,res) => {
  Publicacion.find({}).then( pub => {
    //console.log(pub)
    //res.status(200).json(pub)
    res.render("noticias", {listaPublicaciones: pub})
  })
})*/
router.post('/', (req,res,next) => {
  publicacion = new Publicacion({
    user: "invitado",
    texto: req.body.txtpublicacion,
    fecha: Date.now()
  })
  publicacion.save().then(s => {
    console.log("creado:"+s)
    res.redirect("noticias")
  })
})

module.exports = router
