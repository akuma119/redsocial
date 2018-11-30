var express = require('express')
var router = express.Router()

router.get('/', (req,res,next) => {
  res.status(200).json({
    mensaje: 'GET usuarios'
  })
  next()
})
router.post('/', (req,res,next) => {
  res.status(200).json({
    mensaje: 'POST usuarios'
  })
  next()
})

module.exports = router
