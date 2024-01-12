import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";
import "dotenv/config.js";
import {connection} from "./database/db.js" ;
import gameRouter from './routers/GameRouter.js';
import userRouter from './routers/UserRouter.js';
import paymentRouter from "./routers/PaymentRouter.js";


const app = express();
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/users', userRouter);
app.use('/games', gameRouter);
app.use("/pay", paymentRouter)

app.get("/", async(req, res)=>{
   res.send("Bem-vindo à API N.E.R.D versão Alpha: 0.3.1");
});

connection((connection) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}
                  EndPoints:
                  /users
                  /games
                  /pay
                  
    `);
    console.log('Conectado à base de dados');
  });
}).catch((err) => {
  if (err) {
    throw err;
  }
});
