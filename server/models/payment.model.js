const mongoose = require("mongoose")

const payment = new mongoose.Schema({
    User: {type: Object, required: true},
    Product: {type: Array, required: true},
    details:{type: String},
    totalValue: {type: Number, required: true},
    status: {type: String, required: true}
});


module.exports = mongoose.model('Payment', payment);
