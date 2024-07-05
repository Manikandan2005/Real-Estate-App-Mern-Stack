import express from "express"
import postController from "../controller/post.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/",postController.getPosts)
router.get("/:id",postController.getPost)
router.post('/',verifyToken,postController.addPost)
router.put('/:id',verifyToken,postController.updatePost)
router.delete('/:id',verifyToken,postController.deletePost)

export default router;