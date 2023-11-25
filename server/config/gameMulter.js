const multer = require('multer');
const upload = multer({dest: "uploads/"})

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/")
    },
    filename: (req, file, cb)=>{
        cb(null, `${file.originalname} madame`)
    }
})

module.exports = upload