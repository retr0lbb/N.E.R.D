const express = require('express');
const router = express.Router();
const uploadGame = require('../config/gameMulter');
const gameController = require('../controllers/GameController')


router.post("/", gameController.create)


module.exports = router;