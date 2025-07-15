const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
  date: Date,
  status: { type: String, enum: ["pending", "confirmed", "completed"], default: "pending" }
});

module.exports = mongoose.model("Order", orderSchema);
