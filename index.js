var express = require("express")
var app = express()
var morgan = require("morgan")
app.use(morgan("tiny"))

var rutas = require("./rutas/rutas.js")
app.use("/",rutas)

var pug = require("pug")
app.set('views', __dirname+'/vistas');
app.set('view engine', 'pug');

app.listen(3000)
