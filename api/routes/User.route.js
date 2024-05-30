import express from "express";

import {
  test,
  updateUser,
  deleteUser,
  signout,
} from "../controllers/User.controller.js";
import { verifyToken } from "../utils/verifiedUser.js";
const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);

export default router;
