const multer = require('multer');
const fs = require("fs");
const path = require("path")
/*
USA A PORRA DO PATH.NORMALIZE HENRIQUE
                ^ ^
                 -
*/

const uploadsPath = path.relative("../", "../uploads/Games")

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        const foldername = req.body.title
        const execPathForFolder = path.join(__dirname, "../../", uploadsPath);
        const pathToFolder = `${execPathForFolder}/${foldername}`

        if(!fs.existsSync(pathToFolder)){
            try {
                fs.mkdirSync(pathToFolder, {recursive: true})
            } catch (error) {
                return console.log("impossivel criar a pasta no local desejado "+pathToFolder)
            }
        }
        cb(null, `../uploads/Games/${foldername}`)
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({storage})
module.exports = upload