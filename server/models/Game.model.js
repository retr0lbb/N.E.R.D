const mongoose= require('mongoose');

const gameSchema = new mongoose.Schema({

    name: {type: String, required: true},
    title: {type: String, required: true, unique: true},
    developer: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    gameFiles: {
        src: {type: String, required: true},
        gameImageName: {type: String, required: true}
    },
    Image: {
        src: {type: String, required: true},
        ImageName: {type: String, required: true}
    }
    
})

module.exports = mongoose.model('Games', gameSchema);