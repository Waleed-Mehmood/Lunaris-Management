import express from "express";
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  updatePropertyImages,
} from "../controller/property.controller.js";
import { uploadPropertyImages } from "../utils/imageHandler.js";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";

const propertyRouter = express.Router();

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:_id", getPropertyById);

propertyRouter.use(verifyToken, restrictTo("admin"));

propertyRouter.post("/", uploadPropertyImages, createProperty);
propertyRouter.delete("/:_id", deleteProperty);
propertyRouter.patch(
  "/update-images/:_id",
  uploadPropertyImages,
  updatePropertyImages
);
propertyRouter.patch("/:_id", uploadPropertyImages, updateProperty);

export default propertyRouter;
