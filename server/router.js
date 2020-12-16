const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router.get('/', controllers.getFeed)
router.post('/img', controllers.addImage)
router.post('/like', controllers.incrementLikes)

module.exports = router