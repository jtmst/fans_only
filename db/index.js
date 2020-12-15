const mongoose = require('mongoose');

const config = require('../config.js')
mongoose.connect(config.MONGO_URL)

const fanSchema = new mongoose.Schema({
    fans: {
        id: Number,
        timestamp: String,
        likes: Number,
        image: String
    }
})

let Fan = mongoose.model('Fan', fanSchema)

// ---------------------------- Queries ---------------------------------