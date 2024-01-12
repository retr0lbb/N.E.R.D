import bcrypt from "bcrypt"

export class Encript{
    encrpt(password){
        if(!password){
            throw "Password must be provided";
        }
        const encPass = bcrypt.hashSync(password, 10);
        return(encPass);
    }
    compare(password , encPass){
        if(!password || !encPass) throw "Passwords must be provided"
        return bcrypt.compareSync(password, encPass)
    }
}
