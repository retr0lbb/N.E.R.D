const Payment = require("../models/payment.model")



exports.createPayment = async(req, res) =>{
    const {value, user, products} = req.body
    try {
        const payment = new Payment({
            
        })

    } catch (error) {
        
    }
}