const express = require('express');
const router = express.Router();

const uploads = require("../config/gameMulter")

const gameController = require('../controllers/GameController');



router.post("/",uploads.fields([{name: "gameFile", maxCount: 1},{name: "assets", maxCount: 9}, {name: "image", maxCount: 1}]), gameController.create);
router.get("/", gameController.showAll)
router.post("/name/:name", gameController.findByName)
router.post("/findId/:id", gameController.findById)

module.exports = router;