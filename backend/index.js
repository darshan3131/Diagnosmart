import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";
import diseaseRoute from "./Routes/disease.js";
import adminRoute from "./Routes/admin.js";
import contactRoute from "./Routes/contact.js";
import forgotPassRoute from "./Routes/forgot-password.js";
import healthRoute from "./Routes/healthPredict.js";
import paymentRoute from "./Routes/payment.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

// Database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Connect to database before starting server
connectDB().then(() => {
  // Middleware
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors(corsOptions));

  // Health check route
  app.get("/", (req, res) => {
    res.json({ status: "API is working" });
  });

  // Routes
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/users", userRoute);
  app.use("/api/v1/doctors", doctorRoute);
  app.use("/api/v1/reviews", reviewRoute);
  app.use("/api/v1/bookings", bookingRoute);
  app.use("/api/v1/disease", diseaseRoute);
  app.use("/api/v1/admin", adminRoute);
  app.use("/api/v1/contact", contactRoute);
  app.use("/api/v1/forgot-password", forgotPassRoute);
  app.use("/api/v1/health", healthRoute);
  app.use("/api/v1/payment", paymentRoute);

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err.message
    });
  });

  // Start server
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}).catch(error => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});
