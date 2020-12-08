const mongoose = require('mongoose')

const tiktokSchema = new mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: Number,
    messages: Number,
    shares: Number,
})

const Tiktok = mongoose.model('Tiktok', tiktokSchema)

module.exports = Tiktok