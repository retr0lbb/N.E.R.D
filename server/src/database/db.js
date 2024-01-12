// importa o mongoose
import mongoose from "mongoose";
import "dotenv/config"

//cria uma variavel de conexão com o banco de dados
let connection;

//Strings de conexão com o banco de dados
const DBPASS = process.env.DBPASS;
const DBNAME =  process.env.DBNAME;
const uri = `mongodb+srv://${DBNAME}:${DBPASS}@tcc.ffk0wj3.mongodb.net/?retryWrites=true&w=majority`;


//funcção asincrona que aceita uma callback de conexão
export default async function connect(cb){
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



