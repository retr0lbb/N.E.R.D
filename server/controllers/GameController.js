//importa o nosso modelo do jogo.
const Game = require('../models/Game.model');

//cria um novo jogo na nossa base de dados.
exports.create = async(req, res) =>{
    //ultiliza a função try/catch para lidar com os erros e mesmo que de um erro ele não ira parar o servidor.
    try {
        //pega informações da nossa requisição que são essenciais para o jogo.
        const {name, title, developer, description, price} = req.body;
        //pega 2 arquivos de jogo um executavel e um arquivo de imagem.
        const {file1, file2} = req.files;

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
                src: file1[0].path
            },
            GameImage: {
                src: file2[0].path,
                ImageName: "none"
            }
        })
        //salva o nosso jogo no servidor
        await game.save();

        //manda uma mensagem de sucesso para a requisição
        res.status(200).send("Jogo enviado com sucesso");

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