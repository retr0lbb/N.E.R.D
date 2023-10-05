const express = require('express');
const router = express.Router();

const uploads = require("../config/gameMulter")

const gameController = require('../controllers/GameController');



router.post("/", uploads.fields([
  { name: "file1", maxCount: 1 },
  { name: "file2", maxCount: 1 },
]), gameController.create);

module.exports = router;