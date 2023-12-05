const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connection = require('./db');

const app = express();
const port = process.env.PORT || 3000;

const userRouter = require('./routers/UserRouter.js');
const gameRouter = require('./routers/GameRouter.js');
const paymentRouter = require("./routers/PaymentRouter.js")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const validOrigins = ["https://5173-retr0lbb-nerd-vtbe03zy0uy.ws-us105.gitpod.io", "http://localhost:3000", "http://localhost:5173", "https://5173-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || validOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Acesso não permitido por CORS'));
      }
    },
    methods: "GET, POST, PATCH, DELETE",
    allowedHeaders: "Content-Type"
  })
);

app.use('/users', userRouter);
app.use('/games', gameRouter);
app.use("/pay", paymentRouter)



app.get("/", async(req, res)=>{
   res.send("Bemvindo a api N.E.R.D versão Alpha: 0.3.1");
});
connection((connection) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log('Conectado à base de dados');
  });
}).catch((err) => {
  if (err) {
    throw err;
  }
});
