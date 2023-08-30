const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    pass:{type: String, required: true},
    type: {type: Boolean, required: true},
    image: {
        imgName: {type: String},
        src: {type: String}
    }

});


module.exports = mongoose.model('User', userSchema);