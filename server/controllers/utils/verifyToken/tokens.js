const jwt = require("jsonwebtoken");


function verifyToken(req, res, next){
    const HeadersAuth = req.headers["authorization"];
    let token = ""
    if(HeadersAuth){
       token =  HeadersAuth.split(" ")[1];
    }else{
        token == null;
        res.status(401).send("token Invalido");
    }
    jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET, (err, user)=>{
        if(err){
            console.log(token, process.env.JSON_WEB_TOKEN_SECRET)
            return res.status(403).json({Erro: err});
        }
        req.user = user;
        next();
    })
}

module.exports = verifyToken