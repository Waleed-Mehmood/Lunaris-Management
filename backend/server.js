import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import propertyRouter from "./routes/property.route.js";
import reviewRouter from "./routes/review.route.js";
// import testRouter from "./testing/testing.js";
import userRouter from "./routes/user.routes.js";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from /public
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/public', express.static(path.join(__dirname, 'public')));

// Enable CORS for frontend
app.use(cors({
  origin: "https://lunarismanagement.com",
  credentials: true
}));

if (ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/property", propertyRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/testing", testRouter); // Placeholder for testing routes

app.get("/", (req, res) => {
  res.send("Lunaris Management");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} at ${ENV} mode`);
  connectDB();
});
