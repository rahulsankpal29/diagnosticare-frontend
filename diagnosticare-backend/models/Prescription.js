const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  imageUrl: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Prescription", prescriptionSchema);
