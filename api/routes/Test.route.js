import express from "express"
import testController from "../controller/test.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.get("/loggedin",verifyToken,testController.isLoggedin)
router.get("/isadmin",testController.isAdmin)

export default router