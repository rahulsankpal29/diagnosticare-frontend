const express = require("express");
const router = express.Router();
const {
  getAllTests,
  createTest
} = require("../controllers/testController");

router.get("/", getAllTests);
router.post("/", createTest);

module.exports = router;
