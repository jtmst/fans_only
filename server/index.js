const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const router = require("./router.js")
const config = require('../config.js')
const cors = require("cors")

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())
const AWS = require('aws-sdk')


app.use('/', router)
// AWS.config.update({
//     accessKeyId: config.AWS_ACCESS_KEY,
//     secretAccessKey: config.AWS_SECRET_KEY,
//     region: 'us-east-1'
// })
// var params = {
//     Image: {
//         S3Object: {
//             Bucket: "fans-only-images",
//             Name: "fan1.jpg"
//         }
//     },
//     MaxLabels: 5,
//     MinConfidence: 70
// }

// const rekognition = new AWS.Rekognition();
// rekognition.detectLabels(params, function (err, data) {
//     if (err) console.log(err)
//     else console.log(data)
// })

const port = process.env.PORT
app.listen(port, function () {
    console.log(`listening on port ${port}`)
})