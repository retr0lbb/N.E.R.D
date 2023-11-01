const mongoose = require("mongoose")

const payment = new mongoose.Schema({
    User: {type: Object, required: true},
    Product: {type: Array, required: true},
    details:{},
    totalValue: {type: Number, require: true}
});


module.exports = mongoose.model('Payment', payment);
