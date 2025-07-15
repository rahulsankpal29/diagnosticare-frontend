const Test = require("../models/Test");

exports.getAllTests = async (req, res) => {
  const tests = await Test.find();
  res.json(tests);
};

exports.createTest = async (req, res) => {
  try {
    const { name, description, price, availableSlots } = req.body;
    const test = new Test({ name, description, price, availableSlots });
    await test.save();
    res.status(201).json(test);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
