var LocalStrategy = require("passport-local").Strategy

var estrategia = new LocalStrategy((user, pass, done)=> {
  if (user=="tato" && pass=="asd") {
    return done(null, {user: "tato", pass: "asd"})
  }
})

exports.estrategia = estrategia
