const express = require('express')
const router = express.Router()

const upload = require('../config/multer')

const userController = require('../controllers/UserController')


router.post("/",upload.single("file"), userController.create)
router.get("/", userController.findAll)
router.delete("/:id", userController.delet)
router.put("/:id", userController.update)
module.exports = router;