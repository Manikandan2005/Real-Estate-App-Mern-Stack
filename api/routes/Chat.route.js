import express from "express";
import chatRoutes from "../controller/chat.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, chatRoutes.getChats);
router.get("/:id", verifyToken, chatRoutes.getChat);
router.post("/", verifyToken, chatRoutes.addChat);
router.put("/read/:id", verifyToken, chatRoutes.readChat);

export default router;