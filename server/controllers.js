const db = require("../db/index")
const AWS = require('aws-sdk')
const config = require('../config.js')

AWS.config.update({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_KEY,
    region: 'us-east-1'
})

module.exports = {
    getFeed: function (req, res) {
        let { count, page } = req.query
        db.returnRecentPosts(count, page)
            .then(list => {
                res.status(200).send(list)
            })
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
                    if (data.Labels[i].Name.includes(req.body.labels[0])) {
                        db.saveImage(req.body)
                        res.status(202).json("1")
                        return
                    }
                }
                res.status(203).json("0")
            }
        })
    },
    incrementLikes: function (req, res) {
        let { timestamp } = req.body.timestamp
        db.updateLikes(timestamp)
        res.status(200).json("like recorded")
    }
}