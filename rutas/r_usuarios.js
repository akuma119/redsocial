var express = require('express')
var router = express.Router()
var bodyParser = require("body-parser")
var multer = require("multer")
var upload = multer({dest: "uploads/"})
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

// base de datos
var Usuario = require("../modelos/usuario.js")

router.get('/', (req,res,next) => {
/*  res.status(200).json({
    mensaje: 'GET usuarios'
  })*/
  res.render("usuarios")
  //next()
})
router.post('/', upload.single('imagen'), (req,res,next) => {
  /*res.status(200).json({
    mensaje: 'POST usuarios'
  })*/
  /*usuario = new Usuario({
    nombre: req.body.nombre,
    mail: req.body.mail,
    pass: req.body.pass,
    img: req.body.img,
    nivel: 1 // porque los usuarios empiezan en nivel 1, regla de negocio
  })*/
  /*usuario.guardar()*/
  //console.log(usuario.modelo)
  /*usuario = new Usuario({})
  console.log(usuario)
  console.log(usuario.modelo)*/

  console.log("req.file: ",req.file)
  console.log("req.body: ",req.body)
  /*Usuario.findOne({}).then( us => {
    console.log(us.img.buffer)
    res.contentType("image/*")
    res.send(us.img.buffer)
  })*/
  /*imagen = req.body.img
  fs = require("fs")
  fs.writeFile("rutas/imagen.png",imagen.buffer, (err) => { console.log(err)})*/
  //res.render("usuarios", {imagen: imagen.buffer})

  //next()
})

module.exports = router
