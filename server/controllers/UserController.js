const User = require('../models/User');
const fs = require('fs');
const upload = require('../config/multer.js')
const bcript = require("bcrypt");


const encriptPass =  (pass) =>{
    const salth = 10
    try {
        if(!pass) return;
        if(pass === undefined) return;
        return  bcript.hashSync(pass, salth)
        
    } catch (error) {
        console.log("Erro ao hasear a senha")
    }

}
exports.create = async (req, res) => {
    try {
        const {name, email, pass} = req.body
        const{imgName} = req.body
        const src = req.file
        let type = false;

        const user = new User({
            name: name,
            email: email,
            pass: encriptPass(pass),
            type: type,
            image: {
                imgName: imgName,
                src: src.path
            }
        })
        await user.save()
        res.json({user, msg: "Deu certo porra"});
    } catch (error) {
        res.status(500).json({ message: "Erro ao salvar usuario" });
        console.log(error)
    }
}
  exports.login = async (req, res) =>{
    const pass = req.body
    const id = req.params.id

    try {
        const user = await User.findById(id)
        if(!user) {
            res.status(404).json({ message: " Usuario não encontrado "})
            return;
        }
        console.log(req.body)
        if(bcript.compareSync(pass, user.pass)){
            res.status(200).json({message: "Usuario logado com sucesso"})
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(500).json({ message: "Erro ao logar o usuario"});
        }
    }  
}
exports.findAll = async (req, res) => {
    try {
        const user = await User.find();

        if(!user){
            return res.status(404).json({message: " Usuario não existente"})
        }
        res.json({user});
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar usuarios"})
    }
}
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
exports.delet = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }
  
      fs.unlinkSync(user.image.src);
  
      res.json({ message: "Usuario removido com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao remover usuario" });
    }
  };

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
                fs.unlinkSync(user.image.src);
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