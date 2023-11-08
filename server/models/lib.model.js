const mongoose = require('mongoose');

const libSchema = new mongoose.Schema({
    games:{type: Array},
    downloadedGames: {type: Array},
    myGames: {type: Array}
})

module.exports = mongoose.model("lib", libSchema)