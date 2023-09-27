const {MongoClient} = require("mongodb")
require('dotenv').config();


let connection;
let DBPASS = "DztTLNaMZqZKkUDS";
let uri = `mongodb+srv://retr0:${DBPASS}@tcc.ffk0wj3.mongodb.net/?retryWrites=true&w=majority`;


async function connect(cb){
    if(connection){
        cb(connection);
        return;
    }
    try {
        const client = await MongoClient.connect(uri);
        connection = client.db();
        cb(connection)

        if(error){
            console.log(error);
        }
    } catch (error){
        console.log(error);
    }
}

connect()
