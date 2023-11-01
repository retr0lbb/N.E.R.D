
const Payment = require("../models/payment.model")
const gameController = require("./GameController")


exports.createPayment = async(req, res) =>{
    const {user, products} = req.body;
    try {

        if(!products || !user){
            return res.status(404).send("mamai")
        }

        const gamePromises = products.map( element =>{
            return gameController.findById(element)
        })
        const gameResults = await Promise.all(gamePromises)
        const gameBundle = gameResults.filter((e)=> e !== null)

        res.status(200).json({products: gameBundle})
    } catch (error) {
        if(error){
            res.status(500).send("error")
            console.log(error)
        }
    }
}