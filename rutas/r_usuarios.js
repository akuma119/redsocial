var express = require('express')
var router = express.Router()
var bodyParser = require("body-parser")


var multer = require("multer")
var store = multer.diskStorage({
  destination: (req,file,callback) => {
    callback(null,"public/uploads")
  },
  filename: (req,file,callback) => {
    callback(null,"IMG-"+Date.now()+".jpg")
  }
})
var upload = multer({storage: store})
//var upload = multer({dest: "public/uploads/"})


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
  //res.redirect("/usuarios.html")
})
router.post('/', upload.single("imagen"), (req,res,next) => {

  /*res.status(200).json({
    mensaje: 'POST usuarios'
  })*/
  usuario = new Usuario({
    nombre: req.body.nombre,
    mail: req.body.mail,
    pass: req.body.pass,
    img: req.file.filename,
    nivel: 1 // porque los usuarios empiezan en nivel 1, regla de negocio
  })
  usuario.save()
  /*usuario.guardar()*/
  //console.log(usuario.modelo)
  /*usuario = new Usuario({})
  console.log(usuario)
  console.log(usuario.modelo)*/
  //console.log("----req: ", req)
  console.log("----req.file: ",req.file)
  console.log("----req.body: ",req.body)
  //console.log("----req.headers: ",req.headers)
  /*var fs = require("fs")
  fs.writeFile("jsjsjs",req.file, (err) => {
    console.log("no se pudo guardar: ", err)
  })*/
  res.render("usuarios", {var_imagen: "/public/uploads/"+usuario.img})
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
