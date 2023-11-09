const Payment = require("../models/payment.model")
const gameController = require("./GameController")
require("dotenv").config()
const SECRET_KEY = process.env.SECRET_KEY
const PUBLIC_KEY = ""
const Stripe = require("stripe")(SECRET_KEY);
const user = require("../models/User")
const { set } = require("mongoose")


async function filterGameBundle(gameBundle, UserId){
    try {
        const usuario = await user.findById(UserId)
        console.log(usuario.lib)

        let semNoDuplicatesGameArray = new set(gameBundle)
        let
    } catch (error) {
        
    }
}

exports.createPayment = async(req, res) =>{
    const {user, products} = req.body;
    try {
        filterGameBundle(null, user)
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
                    currency: "brl",
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
        res.status(200).json({session: userPaymentSession.id, products: payment, url: userPaymentSession.url})

    } catch (error) {
        if(error){
            res.status(500).send("error")
            console.log(error)
        }
    }
}

exports.createWebHook = async(req, res)=>{
    const corpo = req.body;
    try {
      // Acessando o ID da sessão de pagamento
      const sessionId = corpo.data.object.id;
  
      // Acessando o status do pagamento
      const paymentStatus = corpo.data.object.payment_status;
  
      // Aqui, você pode realizar ações com base nas informações do pagamento
      if (paymentStatus === "paid") {
        // O pagamento foi bem-sucedido, faça o que for necessário, como atualizar o usuário ou registrar a compra.
        console.log(`Pagamento bem-sucedido para a sessão: ${sessionId}`);
      } else {
        // O pagamento não foi bem-sucedido, trate de acordo.
        console.log(`Pagamento não foi bem-sucedido para a sessão: ${sessionId}`);
      }
  
      res.status(200).send("Webhook recebido com sucesso");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao processar o webhook");
    }
  };


