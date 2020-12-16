const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const router = require("./router.js")
const cors = require("cors")

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.use('/home', express.static(__dirname + '/../dist'))
app.use('/', router)

const port = process.env.PORT
app.listen(port, function () {
    console.log(`listening on port ${port}`)
})