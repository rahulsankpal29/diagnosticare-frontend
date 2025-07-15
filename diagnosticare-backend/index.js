const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve static prescription images

// API Route Mounting
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tests", require("./routes/testRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/prescriptions", require("./routes/prescriptionRoutes"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
