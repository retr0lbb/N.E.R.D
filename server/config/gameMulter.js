const multer = require('multer');
const path = require('path');
const fs = require('fs')

const gameStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const gamesDir = '../uploads/games'; // Pasta onde você deseja armazenar os arquivos .exe dos jogos
  
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
  
  const uploadGame = multer({ storage: gameStorage });
  module.exports =  uploadGame;