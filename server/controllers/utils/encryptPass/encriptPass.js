const bcrypt = require("bcrypt");
function encryptPass(pass, securityLevel){
    return(bcrypt.hashSync(pass, securityLevel))
}

module.exports = encryptPass;