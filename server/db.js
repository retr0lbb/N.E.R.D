// importa o mongoose
const mongoose = require("mongoose");
require('dotenv').config();

//cria uma variavel de conexão com o banco de dados
let connection;

//
const DBPASS = process.env.DBPASS
const DBNAME = process.env.DBNAME;
const uri = `mongodb+srv://${DBNAME}:${DBPASS}@tcc.ffk0wj3.mongodb.net/?retryWrites=true&w=majority&wtimeoutMS=30000`;


console.log(DBPASS, "name", DBNAME)

async function connect(cb){
    if(connection){
        cb(connection);
        return;
    }
    try {
        const dbConnection = await mongoose.connect(uri);

        connection = dbConnection.connection;
        cb(connection)
    } catch (error){
        console.log(error);
    }
}


module.exports = connect;
