import express from "express"
import authController from "../controller/auth.controller.js"

const router = express.Router()

router.post('/login',authController.login)
router.post('/logout',authController.logout)
router.post('/register',authController.signup)

export default router