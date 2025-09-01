import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "../controller/review.controller.js";
import { uploadReviewUserImage } from "../utils/imageHandler.js";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import { checkAuth } from "../controller/user.controller.js";

const reviewRouter = express.Router();

reviewRouter.use(verifyToken, restrictTo("admin"));

reviewRouter.post("/", uploadReviewUserImage, createReview);
reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:_id", getReviewById);
reviewRouter.delete("/:_id", deleteReview);
reviewRouter.patch("/:_id", updateReview);
export default reviewRouter;
