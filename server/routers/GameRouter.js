const express = require('express');
const router = express.Router();

const uploads = require("../config/gameMulter")

const gameController = require('../controllers/GameController');



router.post("/",uploads.fields([
    //imagens e grupos de imagens
    {name: "gameFile", maxCount: 1},
    {name: "assets", maxCount: 9}, 
    {name: "image", maxCount: 1}, 
    {name: "bannerImg", maxCount: 1}, 
    {name: "microImg", maxCount: 1}, 
    {name: "groupImg", maxCount: 6},
    {name: "mainImage", maxCount: 1}
]), 

    gameController.create);
router.get("/", gameController.showAll)
router.post("/name/:name", gameController.findByName)
router.post("/findId/:id", gameController.findById)

module.exports = router;