const mongoose = require('mongoose');
require('dotenv').config();



mongoose.set('strictQuery', true)


async function connect(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/users`);

    console.log('Conectado com sucesso')
}
connect().catch(err =>{
    console.error(err)
    return;
})


module.exports = connect;