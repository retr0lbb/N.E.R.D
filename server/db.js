const mongoose = require('mongoose');
require('dotenv').config();



mongoose.set('strictQuery', true)


let connection;


async function connect(){
    if(!connection){
        mongoose.connect(`mongodb+srv://retr0lbb:<password>@tcc.ffk0wj3.mongodb.net/?retryWrites=true&w=majority`)
        console.log(connection)
    }
    return connection

}
connect().catch(err =>{
    console.error(err)
    return;
})


module.exports = connect;