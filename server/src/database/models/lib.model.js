const mongoose = require('mongoose');

const libSchema = new mongoose.Schema({
    games:{type: Array},
    downloadedGames: {type: Array},
    myGames: {type: Array},
    relatedUser: {type: String, require: true}
})

module.exports = mongoose.model("lib", libSchema)