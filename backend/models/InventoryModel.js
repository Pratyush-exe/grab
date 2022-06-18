const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Restaurant',
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please specify Quantity'],
  },
});

module.exports = mongoose.model('Inventory', InventorySchema);
