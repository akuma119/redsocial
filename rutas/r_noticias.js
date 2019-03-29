var express = require('express')
var router = express.Router()
var bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

// base de datos

var Publicacion = require("../modelos/publicacion.js")
var Usuario = require("../modelos/usuario.js")

router.get('/', (req,res,next) => {

  /*Publicacion.aggregate([
    { $lookup: {
      from: 'usuarios',
      localField: 'user',
      foreignField: 'nombre',
      as: 'info_user'
    }}
  ]).then( lpub => {
    for (i=0; i<lpub.length; i++) {
      // console.log(lpub[i].info_user[0].img)
      console.log(lpub[i])
    }
    res.render("noticias", {listaPublicaciones: lpub})
  })*/
  Publicacion.find({}).sort({fecha: -1}).then( listpub => {
    l = []
    //console.log(listpub)

    listpub.forEach((publicacion) => {
      Usuario.findOne({nombre: publicacion.user}).then( usr => {
        //console.log(usr)
        l.push({
          texto: publicacion,
          avatar: usr.img
        })
      })
    })
    //console.log(l)
    res.render("noticias", {listaPublicaciones: listpub})//listpub})

    //console.log(pub)
    //res.status(200).json(pub)
    //Publicacion.holamundo()
    //res.render("noticias", {listaPublicaciones: lpub})
  }).catch( error => {
    console.log("error al consultar:",error)
    var pubError = [{
      user: "",
      fecha: Date.now(),
      texto: "no hay conexion con la base de datos :("
    }]
    res.render("noticias", {listaPublicaciones: pubError})
  })
  //next()
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
  //next()
})

module.exports = router
