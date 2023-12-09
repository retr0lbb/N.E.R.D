//uso do pacote fs para gerenciamento de aquivos.
const jwt = require("jsonwebtoken")
require("dotenv").config()

//importações de funções em outras pastas.
const unlinkSyncFs = require("./utils/fs/unlink");
const encriptPass = require("./utils/encryptPass/encriptPass");
const compare = require("./utils/encryptPass/comparepass");
const User = require('../models/User');
const libModel = require('../models/lib.model');

//Função de criar o usuario
exports.create = async (req, res) => {
    //função try/catch para que mesmo se der erro ele não pare a execução do servidor.
    try {
        //armazenando os dados do corpo da requisição e os armazena.
        const {name, email, pass, biografy, age} = req.body
        const src = req.file

        //variavel de tipo de usuario ainda não implementada.
        let type = false;

        //checa os campos para ver se eles tem valores escritos caso o contrario ele retorna um erro.
        if(!name || !email ||!pass){
            return res.status(400).send("Insira as informações corretamente")
        }
        //variavel para armazenar o objeto da imagem.
        let imageData;
        if(src){
            imageData = {
                imgName: imgName,
                src: src.path
            }
        }else{
            imageData ={
                imgName: null,
                src: null
            }
            
        }

        const lib = new libModel({
            downloadedGames: [],
            myGames: [],
            games: [],
            relatedUser: name
        })
        

        // instanciamos o modelo do usuario.
        const user = new User({
            name: name,
            email: email,
            //encriptamos a senha antes de enviar para a base de dados 
            pass: encriptPass(pass, 10),
            isDev: type || false,
            image: imageData,
            lib: lib,
            biografy: biografy || "none",
            SimpleAge: age || 18
        })

        //enviamos para a base de dados
        await user.save()


        //se tudo der certo ele exibe o json dos dados do usuario cadastrado e uma mensagem de sucesso
        res.json({data: user, msg: "Usuario inserido com sucesso"});
        await lib.save();

        //caso de erro essa função lidara com o erro
    } catch (error) {
        //caso o cógido do erro for 11000 erro relacionado a campos unicos ja cadastrados
            if(error.code === 11000){
                //retorna uma mensagem de erro dizendo que o email ja foi cadastrado
                return res.status(400).send("Email ja cadastrado")
            }

        //em outros casos apenas retorna uma mensagem de erro padrão
        res.status(500).json({ message: "Erro ao salvar usuario" });

        //vemos o codigo do erro e o erro no terminal
        console.log(error.code)
        console.log(error)
    }
}

//função de login do usuario.
exports.login = async (req, res) =>{
    //armazenando os dados do corpo da requisição e os armazena.
    const {email, pass} = req.body
    const TOKENSECRET = process.env.JSON_WEB_TOKEN_SECRET
    //função try/catch para que mesmo se der erro ele não pare a execução do servidor.
    try {
        //fazemos uma busca no banco de dados fornecendo o email do usuario.
        const user = await User.findOne({"email": email});
        
        //se não encontrar o usuario ele retorna o erro 404.
        if(!user) {
            return(res.status(404).json({ message: " Usuario não encontrado "}));
        }
        //compara a senha digitada com a senha salva no banco de dados.
        if(compare(pass, user.pass)){
            console.log(TOKENSECRET)
            const token = jwt.sign({userId: user._id, email: user.email}, `${TOKENSECRET}`, {expiresIn: '5h'})


            //se tudo der certo ele retorna uma mensagem de usuario logado com sucesso.
            return(res.status(200).json({message: "Usuario logado com sucesso", data: user, token: token}));
        }else{
            //caso as senhas não batam ele retorna um erro.
            return res.status(403).send("senhas não batem");
        }
        //caso de erro, essa função lida com eles.
    } catch (error) {
        if(error){
            console.log(error)
            res.status(500).json({ message: "Erro ao logar o usuario"});
        }
    }  
}
//acha todos os usuarios cadastrados(Para grupo de amigos)
exports.findAll = async (req, res) => {    
    try {        
        const user = await User.find();
        if(!user || user.length === 0){
            return res.status(404).send("Usuarios não encontrados");
        }
        res.status(200).send(user);
        console.log(req.user)
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar usuarios"});
    }
}
//achar um usuario especifico por nome de usuario
exports.findByUsername = async(req, res) =>{
    try{
        const username = req.body
        const listOffindedUsers = User.findOne({"name": username})
        if(!listOffindedUsers){
            return(res.status(404).json({message: "usuario não encontrado"}))
        }

        
    }catch (err){
        if(err) res.status(500).json({message: "falha no servidor"})
    }
}
//deleta um usuario
exports.delet = async (req, res) => {
    try {
        //recebe um parametro de id para excluir um usuario.
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);

        //se não achar usuario retorna um erro.
      if (!user) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }

      // retira a imagem do usuario da pasta uploads
      //unlinkSyncFs(user.image.src);

      //se tudo der certo retorna uma mensagem
      res.json({ message: "Usuario removido com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao remover usuario" });
    }
};
//Atualiza as informações do usuario
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body
        const file = req.file;
        const user = await User.findById(id);
        if(!user) {
            res.status(404).json({ message: "Usuario não encontrado"})
        }
        if(file){
            if(user.image && user.image.src){
                unlinkSyncFs(user.image.src);
            }

            user.image={
                imgName: file.originalname,
                src: file.path
            }
        }
        user.name = updates.name || user.name;
        user.email = updates.email || user.email;
        user.pass = updates.pass || user.pass;

        await User.findByIdAndUpdate(id, user);
        res.json({message: "Usuario alterado com sucesso"})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "erro ao alterar usuario"})
    }
}

//friends
exports.addFriends = async(req, res) =>{
    const {frieds, userId} = req.body
    
    try {
        if(!frieds){
            return res.status(404).send("usuario não encontrado");
        }
        const user = await User.findById(userId);

        for(const friendId of frieds){
            const friend = await User.findById(friendId);
            if(friend){
                user.FriendList.push(friend.name);
            }
        }
        console.log(user.FriendList)

       await User.findByIdAndUpdate(userId, user);

        res.status(200).json({message: "Amigos adicionados com sucesso", frieds: user.FriendList})

        if(!user){
            return res.status(404).send("Usuario não encontrado por favor faça o login");
        }
        
    } catch (error) {
        if(error){
            throw error
        }
    }
}