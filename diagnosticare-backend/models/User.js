const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["patient", "doctor", "staff"], default: "patient" },
  phone: String,
  address: String
});

module.exports = mongoose.model("User", userSchema);
