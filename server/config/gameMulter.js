const multer = require("multer");
const fs = require("fs");

const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
      const uploadsDir = "/uploads/";

      if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
      }
      cb(null, uploadsDir);
    },
    filename: (req, file, cb)=>{
      cb(null, file.originalname);
  }
})


const uploads = multer({storage})


module.exports = uploads