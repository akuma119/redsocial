var express = require("express")
var app = express()



var morgan = require("morgan")
app.use(morgan("tiny"))

var favicon = require("serve-favicon")
var path = require("path")
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

var rutas = require("./rutas/rutas")
app.use("/",rutas)




var pug = require("pug")
app.set('views', __dirname+'/vistas')
app.set('view engine', 'pug')

app.listen(3000)
