import express from "express"
import userController from '../controller/user.controller.js'
import {verifyToken} from '../middleware/verifyToken.js'

const router = express.Router()

router.get('/',userController.getUsers)
// router.get('/:id',verifyToken,userController.getUserById)
router.put('/:id',verifyToken,userController.updateUser)
router.delete('/:id',verifyToken,userController.deleteUser)
router.post("/save", verifyToken, userController.savePost)
router.get("/profilePosts",verifyToken,userController.profilePosts)
router.get("/notification",verifyToken,userController.getNotificationNumber)
router.get("/forgotpassword",userController.forgetPassword)

export default router