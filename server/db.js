const mongoose = require('mongoose');
require('dotenv').config();



mongoose.set('strictQuery', true)


let connection;


async function connect(){
    if(!connection){
        mongoose.connect(`mongodb://127.0.0.1:27017/usuario`)
        console.log(connection)
    }
    return connection

}
connect().catch(err =>{
    console.error(err)
    return;
})


module.exports = connect;