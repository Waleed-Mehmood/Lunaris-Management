import express from "express";
import {
  checkAuth,
  createUser,
  createAdmin,
  logIn,
  logout,
} from "../controller/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();


userRouter.get("/check-auth", verifyToken, checkAuth);
userRouter.post("/sign-up", createUser);
userRouter.post("/admin-signup", createAdmin);
userRouter.post("/log-in", logIn);
userRouter.post("/log-out", logout);

export default userRouter;
