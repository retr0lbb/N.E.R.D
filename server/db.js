const mongoose = require("mongoose")
require('dotenv').config();


let connection;
let DBPASS = "DztTLNaMZqZKkUDS";
let uri = `mongodb+srv://retr0:${DBPASS}@tcc.ffk0wj3.mongodb.net/?retryWrites=true&w=majority&wtimeoutMS=30000`;


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
