import express from "express";
import messageRoutes from "../controller/message.controller.js"
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();


router.post("/:chatId", verifyToken, messageRoutes.addMessage);

export default router;