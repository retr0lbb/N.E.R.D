const mongoose = require("mongoose")

const payment = new mongoose.Schema({
    User: {type: Object, required: true},
    Product: {type: Object, required: true}
});


module.exports = mongoose.model('Payment', payment);
