const mongoose= require('mongoose');

const gameSchema = new mongoose.Schema({

    name: {type: String, required: true},
    title: {type: String, required: true, unique: true},
    developer: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    achivements:{Type: Number},
    
    gameFiles: {
        src: {type: String, required: true},
    },
    GameImage: {
        src: {type: String, required: true},
        ImageName: {type: String, required: true}
    }
    
})

module.exports = mongoose.model('Games', gameSchema);