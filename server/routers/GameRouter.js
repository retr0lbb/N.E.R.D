const express = require('express');
const router = express.Router();

const uploads = require("../config/gameMulter")

const gameController = require('../controllers/GameController');



router.post("/",uploads.single('file'), gameController.create);
router.get("/", gameController.showAll)
router.post("/name/:name", gameController.findByName)
router.post("/findId/:id", gameController.findById)

module.exports = router;