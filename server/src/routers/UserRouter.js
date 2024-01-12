import express from 'express';
import upload from '../config/multer.js';
import {UserController} from '../controllers/UserController.js'
import verifyToken from "../controllers/utils/verifyToken/tokens.js"

const userController = new UserController()
const UserRouter = express.Router()

UserRouter.post("/",upload.single("file"), userController.create);
UserRouter.get("/",verifyToken, userController.findAll);
UserRouter.delete("/:id", userController.delet);
UserRouter.patch("/:id", upload.single("file"),userController.update);
UserRouter.post("/login/", userController.login);
UserRouter.post("/add/friend", userController.addFriends);
UserRouter.get("/userFindId/:id", verifyToken,userController.findUserById)


export default UserRouter;