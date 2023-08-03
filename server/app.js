const express = require('express')
require('dotenv').config()
require('./db.js')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

const userRouter = require("./routers/UserRouter.js")


app.use("/users", userRouter)

app.get("/", (req, res) =>{
    res.json("Teste")
})


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})