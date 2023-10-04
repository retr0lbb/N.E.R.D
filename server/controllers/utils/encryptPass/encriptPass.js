const bcrypt = require("bcrypt");
export default function encryptPass(pass, securityLevel){
    return(bcrypt.hashSync(pass, securityLevel))
}
