import express from "express";

import {
  test,
  updateUser,
  deleteUser,
} from "../controllers/User.controller.js";
import { verifyToken } from "../utils/verifiedUser.js";
const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);

export default router;
