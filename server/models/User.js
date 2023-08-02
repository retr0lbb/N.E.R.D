const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    pass:{type: String, required: true},
    image: {
        imgName: {type: String, required: true},
        src: {type: String, required: true}
    }

});


module.exports = mongoose.model('User', userSchema);