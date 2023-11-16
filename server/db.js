// importa o mongoose
const mongoose = require("mongoose");
require('dotenv').config();

//cria uma variavel de conexão com o banco de dados
let connection;

//
const DBPASS = "2jdeN8aAEy80TozH"
const DBNAME =  "oval2";
const uri = `mongodb+srv://${DBNAME}:${DBPASS}@tcc.ffk0wj3.mongodb.net/?retryWrites=true&w=majority`;


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
