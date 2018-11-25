var express = require("express")
var router = express.Router()
var bodyParser = require("body-parser")
/*var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
passport.use(ctrllogin.estrategia)*/
var usuario = null
//var ctrllogin = require("../controladores/login.js")



// template
/*
router.get("/", (req,res)=> {
  // hacer algo
})
*/
router.post("/", (req,res)=> {

  if (usuario.privilegio == "admin") {
    res.redirect("/admin")
  }
  else {
    res.redirect("/usuario")
  }
})

router.get("/noticias", (req,res)=> {
  res.render("noticias")
})
// esto luegocon el login
/*passport.use(new LocalStrategy (function(user,pass,done) {
  return done(null, {user: "tato", pass: "asd"})
}))*/
router.get("/", (req,res)=> {
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
})
/*router.post("/login", (req,res)=>{
  res.render("exito")
})*/

module.exports = router
