//importa bibliotecas padrão para o nosso servidor como: Express, body-parser, dotev
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

//importa o nosso arquivo de conexão com banco de dados
const connection = require("./db");

//ultiliza o express para a criação do servidor.
const app = express();

//pega a porta que estiver no nosso arquivo de configuração ou a porta 3000.
const port = process.env.PORT || 3000;

//usa o nosso router do express para colocar o sulfixo / e o nome do roteador
//fica assim por exemplo http://localhost:3000/users/
const userRouter = require("./routers/UserRouter.js");
//fica assim por exemplo http://localhost:3000/games/
const gameRouter = require("./routers/GameRouter.js");

//ultiliza o json como middleware para a comunicação das requisições.
app.use(express.json());
//tambem ultiliza o body-parser como middleware.
app.use(bodyParser.urlencoded({ extended: true }));

//ultiliza nosso roteadores como middleware também
app.use("/users", userRouter);
app.use("/games", gameRouter);



//função asyncrona de conexão com o banco de dados ela tem como parametro os dados da nossa conexão em forma de callback.
connection(connection =>{
    //ele executa o nosso servidor apenas se executarmos com sucesso a conexão com o banco de dados
    app.listen(port, () =>{
        //escreve no terminal se a conexão for bem sucedida
        console.log(`Server running on port ${port}`);
        console.log("conectado a base de dados");
    });
    //lida com os erros do servidor
}).catch(err =>{
    if(err){
        console.log("não foi possivel conectao o servidor");
    }
});
