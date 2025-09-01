import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const checkValidObjectId = (Model, _id) => {
  if (!_id || !mongoose.isValidObjectId(_id)) {
    throw new Error(`Correct ${Model.modelName} ID is required`);
  }
};

export const timeToMs = (days = 0, hours = 0, minutes = 0) =>
  +((days * 24 + hours) * 60 + minutes) * 60 * 1000;

export const generateTokenAndSetCookie = (user, res, statusCode = 200) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const cookieOptions = {
    httpOnly: true,
  maxAge: 1 * 24 * 60 * 60 * 1000, // 1 din (milliseconds)
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
};
