var express = require("express")
var app = express()

// --- base de datos ---
var mongoose = require("mongoose")
// elegir una URI
//var uri = "mongodb+srv://tato:faster4me@clusterredsocial-q5xoj.mongodb.net/redsocial?retryWrites=true"
var uri = "mongodb://localhost:27017/redsocial"
mongoose.connect(uri,  { useNewUrlParser: true })
.then(con => {
  console.log(" --- conexion con base datos establecida!")
})
.catch(err => {
  console.log(" --- error al conectar: ",err)
})

// --- morgan ---
var morgan = require("morgan")
app.use(morgan("tiny"))

// --- favicon ---
var favicon = require("serve-favicon")
var path = require("path")
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// --- rutas ---
var rutas = require("./rutas/rutas")
app.use("/",rutas)

// --- pug ---
var pug = require("pug")
app.set('views', __dirname+'/vistas')
app.set('view engine', 'pug')


app.listen(3000)
