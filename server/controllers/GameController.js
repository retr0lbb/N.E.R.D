const Game = require('../models/Game.model')

exports.create = async(req, res) =>{
    try {
        const {name, title, developer, description, price, gameImageName} = req.body;
        const file = req.file;

        const game = new Game({
            name: name,
            title: title,
            developer:developer,
            description: description,
            price: price,
            gameFiles: {
                gameImageName: gameImageName,
                src: file.path
            }
        })

        await game.save()

        res.status(200).send("Jogo enviado com sucesso")

    } catch (error) {
        if(error){
            res.status(500).send("Erro no servidor");
            console.log(error)
            return;
        }
    }
}