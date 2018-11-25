var listaPublicaciones = []

// esto luego tiene que irse
class Publicacion(usr, txt, img, fecha) = {
  user: usr,
  texto: txt,
  imagen: img,
  fecha: fecha
}

listaPublicaciones.push(new Publicacion("tato","hola mundo",null,null))
document.getElementById("contenido").innerHTML = listaPublicaciones[0].user
