const express = require('express')
const router = express.Router()
const upload = require('../config/multer')
const userController = require('../controllers/UserController')
const verifyToken = require("../controllers/utils/verifyToken/tokens")

router.post("/",upload.single("file"), userController.create);
router.get("/",verifyToken, userController.findAll);
router.delete("/:id", userController.delet);
router.patch("/:id", upload.single("file"),userController.update);
router.post("/login/", userController.login);
router.post("/add/friend", userController.addFriends);



module.exports = router;