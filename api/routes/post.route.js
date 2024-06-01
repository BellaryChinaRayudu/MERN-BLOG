import express from "express";
import { verifyToken } from "../utils/verifiedUser.js";
import {
  create,
  getPosts,
  deletePost,
  updatePost,
  getUsers,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", verifyToken, getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatePost);
router.get("/getUsers", verifyToken, getUsers);

export default router;
