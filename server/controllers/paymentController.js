const Payment = require("../models/payment.model")
const gameController = require("./GameController")
const Stripe = require("stripe")("SECRET_KEY")

exports.createPayment = async(req, res) =>{
    const {user, products} = req.body;
    try {

        if(!products || !user){
            return res.status(404).send("Erro ao encontrar produtps selecionados")
        }

        const gamePromises = products.map( element =>{
            return gameController.findById(element)
        })
        const gameResults = await Promise.all(gamePromises)
        const gameBundle = gameResults.filter((e)=> e !== null)

       
        var totalPrice = 0;
        gameBundle.forEach((val) =>{
            console.log(val.price)
            totalPrice += val.price
        })
        const payment = new Payment({
            User: user,
            Product: gameBundle,
            details: "jogos novos e atualizados",
            totalValue: totalPrice
        })
        res.status(200).json({products: payment})

    } catch (error) {
        if(error){
            res.status(500).send("error")
            console.log(error)
        }
    }
}