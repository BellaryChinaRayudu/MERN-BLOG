import express from "express";
import { verifyToken } from "../utils/verifiedUser.js";
import { create, getPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", verifyToken, getPosts);

export default router;
