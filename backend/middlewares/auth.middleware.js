import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    // If not in cookies, check Authorization header
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "You're not logged in, please log in to get access...!",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "The user belonging to this token does no longer exist!",
      });
    }
    // Grant access to protected routes
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("jwt"); // JWT cookie clear on error
    res.status(401).json({
      success: false,
      message: err.message || "Unauthorized access, please log in again!",
    });
    console.error(`Error in verifyToken: ${err.message}`);
    console.error(`Error in verifyToken: ${err}`);
    console.error(`Error in verifyToken: ${err.stack}`);
  }
};

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req?.user?.role)) {
      return res.status(403).json({
        success: false,
        message: `You do not have permission to perform this action!`,
      });
    }
    next();
  };
};
