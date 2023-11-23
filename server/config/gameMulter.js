const multer = require("multer");
const fs = require("fs");

const path = require("path")


const rootDir = path.join(__dirname, "../../")



const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
      const uploadsDir = path.join(rootDir, "/uploads/Gamefiles");


      if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
      }
      cb(null, uploadsDir)
  
  },
  filename: (req, file, cb)=>{
      cb(null, file.originalname)
  }
})


const uploads = multer({storage})


module.exports = uploads