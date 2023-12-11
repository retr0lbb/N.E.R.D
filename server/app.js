const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path")
require('dotenv').config();
const connection = require('./db');

const app = express();
const port = process.env.PORT || 3000;

// Adicione esta linha antes do app.use('/users', userRouter);


const userRouter = require('./routers/UserRouter.js');
const gameRouter = require('./routers/GameRouter.js');
const paymentRouter = require("./routers/PaymentRouter.js")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  })
);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/users', userRouter);
app.use('/games', gameRouter);
app.use("/pay", paymentRouter)



app.get("/", async(req, res)=>{
   res.send("Bemvindo a api N.E.R.D versão Alpha: 0.3.1");
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
