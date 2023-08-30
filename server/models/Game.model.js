const mongoose= require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {Type: String},
    desc: "",
    price: "",
    archives: "",
    developer: "",
    
})