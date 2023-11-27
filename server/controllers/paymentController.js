const Payment = require("../models/payment.model");
const gameController = require("./GameController");
require("dotenv").config();
const SECRET_KEY = "sk_test_51NNHwlByYleOMp8r9a2pDNQzMHeVuatq3vnZN6AwWjmag7XJ6rUEZgC46soOuVzoQwRkq3jcfpLCuLNwmwHOwJ3b00djiZzEqL";
const PUBLIC_KEY = "";
const Stripe = require("stripe")(SECRET_KEY);
const User = require("../models/User");



let gamelist;
let user;

function limparItensRepetidos(array){
    return array.filter((item, index, self) =>{
        return !self.includes(item, index + 1);
    })
}

function checkIfuserAlreadyHaveTheGame(user, array){
    for(i=0; i<=array.length; i++){
        for(j=0; j<= user['lib']['games'].length; j++){

        }
    }
}

exports.createPayment = async(req, res) =>{
    const {userId, products} = req.body;
    try {
        if(!products || !userId){
            return res.status(404).send("Erro ao encontrar produtps selecionados");
        }
        const cleanProducts = limparItensRepetidos(products);

        user = await User.findById(userId);
        console.log(user["lib"]["games"].length)
        if(!user){
            return res.status(404).send("usuario não encontrado");
        }

        const gamePromises = cleanProducts.map( element =>{
            return gameController.findById(element);
        })
        const gameResults = await Promise.all(gamePromises);
        const gameBundle = gameResults.filter((e)=> e !== null);


       
        var totalPrice = 0;
        gameBundle.forEach((val) =>{
            totalPrice += val.price;
        });

        gamelist = gameBundle;
        const payment = new Payment({
            User: user,
            Product: gameBundle,
            details: `Jogos comprados pelo usuario ${user.name}, enviado o email de confirmação`,
            totalValue: totalPrice,
            status: "waiting payment"
        });

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

        await payment.save()

    } catch (error) {
        if(error){
            res.status(500).send("error")
            console.log(error)
        }
    }
}

exports.createWebHook = async(req, res)=>{
    console.log("ping")
    const corpo = req.body;
    try {
      // Acessando o ID da sessão de pagamento
      const sessionId = corpo.data.object.id;
  
      // Acessando o status do pagamento
      const paymentStatus = corpo.data.object.payment_status;
  
      // Aqui, você pode realizar ações com base nas informações do pagamento
      if (paymentStatus === "paid") {
        // O pagamento foi bem-sucedido, faça o que for necessário, como atualizar o usuário ou registrar a compra.

        user.lib.games.push(gamelist)

        await User.findByIdAndUpdate(user._id, user)
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


