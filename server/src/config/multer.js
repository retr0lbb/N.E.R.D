import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const uploads = "../uploads/pictures";


        if(!fs.existsSync(uploads)){
            fs.mkdirSync(uploads, {recursive: true});
        }
        cb(null, uploads)
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage}) 
export default upload