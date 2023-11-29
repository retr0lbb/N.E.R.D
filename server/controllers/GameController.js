//importa o nosso modelo do jogo.
const Game = require('../models/Game.model');
const path = require("path")
const normalize = require("./utils/NormalizePath/normalize")

//cria um novo jogo na nossa base de dados.
exports.create = async(req, res) =>{
    //ultiliza a função try/catch para lidar com os erros e mesmo que de um erro ele não ira parar o servidor.
    try {
        //pega informações da nossa requisição que são essenciais para o jogo.
        const {name, title, developer, description, price} = req.body;
        //pega 2 arquivos de jogo um executavel e um arquivo de imagem
        const {gameFile, image ,assets, bannerImg, microImg, groupImg, mainImage } = req.files




        if(!name || !title || !developer || !description || !price){
            return res.status(404).send("Insira as informações corretamente");
        }

        // cria o modelo que importamos
        const game = new Game({
            name: name,
            title: title,
            developer:developer,
            description: description,
            price: price,

            //lida com as duas imagens diferentes no servidor
            GameFiles: {
                src: path.normalize(gameFile[0].path)
            },
            GameImage: {
                BannerImage: {src: normalize(bannerImg[0].path)},
                MainImage: {src: normalize(mainImage[0].path)},
                MicroImage: {src: normalize(microImg[0].path)},
                GroupOfImagesForSlider: {src: normalize(groupImg[0].path)}
            },
            AditionalAssets: assets[0].path
        })
        //salva o nosso jogo no servidor
        await game.save();

        //manda uma mensagem de sucesso para a requisição
        res.status(200).json({message: "Jogo enviado com sucesso", game});

        //lida com os erros da nossa requisição
    } catch (error) {
        if(error){
            res.status(500).send("Erro no servidor");
            //da um log para nosso erro
            console.log(error);
            return;
        }
    }
}
exports.showAll = async(req,res) =>{
    try{
        const games = await Game.find();
        if(!games){
            return res.status(404).send("Jogos não encontrados ou em falta");
        }
        res.status(200).json({data: games});
        console.log("Processo finalizado 1");


    }catch(error){
        if(error){
            res.status(500).send("Erro ao mostrar jogos");
        }
    }finally{
        console.log("processo finalizado");
    }
}
exports.findByName = async(req, res) =>{
    const gamename = req.params.name
    try {

        const game = await Game.findOne({"name": gamename});

        if(!game){
            return res.status(404).send("Jogo não encontado");
        }


        res.status(200).send("jogo encontrado");
        console.log(game)

    } catch (error) {
        if(error){
            res.status(500).send("Erro ao buscar jogos");
        }
    }
}
exports.findById = async(id)=>{
    const GameId = id
    try {
        const game = await Game.findById(GameId);
        if(!game){
            return console.log("jogo não encontrado")
        }

        return game
    } catch (error) {
        if(error){
            console;log(error)
            return;
        }
    }
} 