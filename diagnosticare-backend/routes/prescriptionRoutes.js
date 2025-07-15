const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  uploadPrescription,
  getPrescriptionsByUser
} = require("../controllers/prescriptionController");

// File upload config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.post("/", upload.single("image"), uploadPrescription);
router.get("/user/:userId", getPrescriptionsByUser);

module.exports = router;
