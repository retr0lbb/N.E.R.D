const User = require('../models/User');
const fs = require('fs');

exports.create = async (req, res) => {
    try {
        const {name, email, pass} = req.body
        const{imgName} = req.body
        const src = req.file

        const user = new User({
            name: name,
            email: email,
            pass: pass,
            image: {
                imgName: imgName,
                src: src.path
            }
        })
        await user.save()
        res.json({user, msg: "Deu certo porra"});
    } catch (error) {
        res.status(500).json({ message: "Erro ao salvar usuario" });
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
exports.delet = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }
  
      fs.unlinkSync(user.image.src);
      await user.remove();
  
      res.json({ message: "Usuario removido com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao remover usuario" });
    }
  };

  exports.update = async (req, res) => {
    try {
        const userId = req.params.id;
        const {name, email, pass} = req.body;

        const data = {
            name: name,
            email: email,
            pass: pass,
            image: {
                imgName: "icarus",
                src: "none"
            }
        }
        const updatePerson = await User.updateOne({_id: userId}, data)


        res.status(200).json(updatePerson)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro ao atualizar usuario"})
    }
  };