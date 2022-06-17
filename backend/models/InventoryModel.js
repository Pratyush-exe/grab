const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please specify Quantity'],
  },
});

module.exports = { InventorySchema };
