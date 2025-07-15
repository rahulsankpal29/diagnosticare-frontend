const Prescription = require("../models/Prescription");

exports.uploadPrescription = async (req, res) => {
  try {
    const { userId, orderId } = req.body;
    const imageUrl = req.file.path; // Local upload path (or S3 URL if using cloud)
    const prescription = new Prescription({ userId, orderId, imageUrl });
    await prescription.save();
    res.status(201).json(prescription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPrescriptionsByUser = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ userId: req.params.userId });
    res.json(prescriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
