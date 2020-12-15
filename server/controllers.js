const db = require("../db/index")
const AWS = require('aws-sdk')
const config = require('../config.js')

AWS.config.update({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_KEY,
    region: 'us-east-1'
})


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


module.exports = {
    getFeed: function (req, res) {

    },
    addImage: function (req, res) {

        var params = {
            "Image": {
                "Bytes": Buffer.from(req.body.image, "base64")
            },
            "MaxLabels": 5,
            "MinConfidence": 70
        }
        const rekognition = new AWS.Rekognition();
        rekognition.detectLabels(params, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                // check to see if labels contain 'fan'
                for (var i = 0; i < data.Labels.length; i++) {
                    if (data.Labels[i].Name.includes("Fan")) {
                        db.saveImage(req.body)
                        res.status(202).json("it's a fan")
                        return
                    }
                }
                res.status(203).json("it's not a fan")
            }
        })

        // console.log(req.body.image)
        // console.log(req.body)
    },
}