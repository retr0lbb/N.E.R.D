const mongoose = require('mongoose');

const lib = new mongoose.Schema({
    userId: {type: String, required: true},
    games: {type: Array, required: false},
    size: {},

})