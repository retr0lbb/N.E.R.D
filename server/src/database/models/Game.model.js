const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    developer: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    tags: { type: Array, required: true },
    achievements: { type: Array },
    rating: { type: Number },
    GameFiles: {
        src: { type: String, required: true },
    },
    GameImage: {
        MainImage: { 
            src: {type: String, required: true}
         },
        BannerImage: {
            src:{type: String, required: true}
        },
        MicroImage: {src: {type: String, required: false}},
        GroupOfImagesForSlider: {
            src: {type: Array}
        }
    },
    AditionalAssets:[],
    parentalRating: { type: Number, required: false}
});

gameSchema.index({ title: 1 }, { unique: true });
module.exports = mongoose.model('Games', gameSchema);
