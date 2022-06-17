const mongoose = require('mongoose');
const { InventorySchema } = require('./InventoryModel');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  inventory: {
    type: [InventorySchema],
    required: [false],
  },
  lat: {
    type: Number,
    require: true,
  },
  long: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
