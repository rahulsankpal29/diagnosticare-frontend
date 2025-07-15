const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { userId, testId, date } = req.body;
    const order = new Order({ userId, testId, date });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate("testId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
