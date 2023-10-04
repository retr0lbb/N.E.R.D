const Game = require('../models/Game.model')

exports.create = async(req, res) =>{
    try {
        const {name, title, developer, description, price, gameImageName} = req.body;
        const {file1, file2} = req.file;

        const game = new Game({
            name: name,
            title: title,
            developer:developer,
            description: description,
            price: price,
            GameFiles: {
                src: file1.path
            },
            GameImage: {
                src: file2.path,
                ImageName: "none"
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