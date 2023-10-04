const multer = require('multer');
const path = require('path');
const fs = require('fs')

const gameStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const gamesDir = '../uploads/games/gamesfile'; // Pasta onde você deseja armazenar os arquivos .exe dos jogos
  
      // Verifica se a pasta existe, caso contrário, cria a pasta
      if (!fs.existsSync(gamesDir)) {
        fs.mkdirSync(gamesDir, { recursive: true });
      }
  
      cb(null, gamesDir);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) =>{
    const imageGamesDir = "../uploads/games/gamesImage"


    if(!fs.existsSync(imageGamesDir)){
      fs.mkdirSync(imageGamesDir, {recursive: true});

      cb(null, imageGamesDir);
    }
  },
  filename: (req, file, cb) =>{
    cb(null, file.originalname)
  }
})
  
  const uploadGame = multer({ storage:{
    file1: imageStorage,
    file2: gameStorage
  } });
  module.exports =  uploadGame.fields([
    {name: "file1", maxCount: 1 },
    {name: "file2", maxCount: 1 }
  ]);