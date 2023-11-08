const Payment = require("../models/payment.model")
const gameController = require("./GameController")
require("dotenv").config()
const SECRET_KEY = process.env.SECRET_KEY
const PUBLIC_KEY = ""
const Stripe = require("stripe")(SECRET_KEY);

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
            totalPrice += val.price
        })
        const payment = new Payment({
            User: user,
            Product: gameBundle,
            details: "jogos novos e atualizados",
            totalValue: totalPrice
        })

        //stripe rules

        const userPaymentSession = await Stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: gameBundle.map((game)=> ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: game.name
                    },
                    unit_amount: game.price * 100
                }, 
                quantity: 1
            })),
            mode: "payment",
            success_url: "https://www.youtube.com/",
            cancel_url: "https://www.amazon.com.br/ref=nav_logo",
        })

        console.log(userPaymentSession)
        res.status(200).json({session: userPaymentSession.id})

    } catch (error) {
        if(error){
            res.status(500).send("error")
            console.log(error)
        }
    }
}