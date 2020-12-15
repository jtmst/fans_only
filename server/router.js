const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router.get('/', controllers.getFeed)
router.post('/img', controllers.addImage)

module.exports = router