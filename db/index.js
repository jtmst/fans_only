const mongoose = require('mongoose');

const config = require('../config.js')
mongoose.connect(config.MONGO_URL)

const FanSchema = mongoose.Schema({

    timestamp: String,
    likes: Number,
    image: String

})

let Fan = mongoose.model('Fan', FanSchema)

// ---------------------------- Queries ---------------------------------

let returnRecentPosts = (count = 10, page = 1) => {
    return Fan.find({}).sort({}).limit(count)
}

let saveImage = (data) => {
    let newFan = new Fan({
        timestamp: data.timestamp,
        likes: 0,
        image: data.image
    })
    newFan
        .save()
        .then(() => {
            console.log("saved a fan")
        })
        .catch((err) => console.log(err))
}

let updateLikes = (timestamp) => {
    return Fan.findOneAndUpdate(
        { timestamp: timestamp },
        {
            $inc: { likes: 1 }
        }, { new: true }
    )
}

module.exports.returnRecentPosts = returnRecentPosts
module.exports.saveImage = saveImage
module.exports.updateLikes = updateLikes