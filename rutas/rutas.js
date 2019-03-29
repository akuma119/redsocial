var express = require("express")
var router = express.Router()

// --- rutas estaticas ---
router.use("/public",express.static('public'))

// --- para usar CORS ---
router.use((req,res,next) =>{
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow.Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

// --- template para generar mas rutas ---
/*
router.get("/", (req,res)=> {
  // hacer algo
})
*/

// --- ruta inicial ---
router.get("/", (req,res,next)=> {
  //res.redirect("/usuarios")
  res.redirect("/noticias")
})
// stumlinghexakill
// --- rutas de noticias ---
var rutasNoticias = require('./r_noticias.js')
router.use("/noticias",rutasNoticias)

// --- rutas de usuarios ---
var rutasUsuarios = require('./r_usuarios.js')
router.use("/usuarios",rutasUsuarios)


// --- manejo de errores ---
router.use((req,res,next)=>{
  var error = new Error(" recurso no encontrado!")
  res.status(404)
  next(error.message)
})










/*router.post("/", (req,res)=> {

  if (usuario.privilegio == "admin") {
    res.redirect("/admin")
  }
  else {
    res.redirect("/usuario")
  }
})
*/
// esto luegocon el login
/*passport.use(new LocalStrategy (function(user,pass,done) {
  return done(null, {user: "tato", pass: "asd"})
}))*/
/*router.get("/", (req,res)=> {
  if (!usuario) {
    res.redirect("/login")
  }
  else {
    res.redirect("/user/"+usuario.nombre)
  }
})

router.get("/login", (req,res)=> {
  res.render("login")
})
router.post("/login", (req,res)=> {
  res.render("login")
})
router.get("/exito", (req,res)=> {
  res.render("exito")
})*/
/*router.post("/login", (req,res)=>{
  res.render("exito")
})*/

module.exports = router
