const bcrypt = require("bcrypt");

function compare(pass, hashSalt){
    return bcrypt.compareSync(pass, hashSalt)
}
module.exports = compare;
