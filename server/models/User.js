//importa nosso framework de requisições com o banco de dados mongodb.
const mongoose= require('mongoose');


//cria um novo Schema pra usuario que é como se fosse uma classe.
const userSchema = new mongoose.Schema({
    //cria campos como: nome, email, pass, type e um objeto de imagem.
    name:{type: String, required: true},
    //cria um tipo unico de email assim 2 usuarios não podem ter o mesmo email.
    email:{type: String, required: true, unique: true},
    pass:{type: String, required: true},
    biografy:{type: String},
    type: {type: Boolean, required: true},
    image: {
        imgName: {type: String},
        src: {type: String}
    },
    lib: {type: Object, required: true},
    PermitirConteudoAdulto: {type: Boolean},
    FriendList: {type: Array},
    SimpleAge: {type: Number, required: true}
});
//cria um indice para o mongodb atlas saber que o campo email é unico
userSchema.index({ email: 1 }, { unique: true });

//exporta nossa classe usando o mongoose.
module.exports = mongoose.model('User', userSchema);