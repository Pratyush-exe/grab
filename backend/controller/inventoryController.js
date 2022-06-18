const asyncHandler = require('express-async-handler');
const Inventory = require('../models/InventoryModel');

// @desc    Get Restaurant Inventory
// @route   GET /api/inventory/:id
// @access  Public
const getInventory = asyncHandler(async (req, res) => {
  const inventoryItems = await Inventory.find({
    restaurant: req.params.id,
  });
  res.status(200).json(inventoryItems);
});

// @desc    Update Inventory
// @route   PUT /update/:id
// @access  Public
const updateInventory = asyncHandler(async (req, res) => {
  const inventoryItem = await Inventory.findById(req.params.id);

  if (!inventoryItem) {
    res.status(400);
    throw new error('Item not found');
  }

  const restaurantId = inventoryItem.restaurant;

  // Check if signed in Restaurant matches inventoryItem owner
  if (restaurantId !== req.body.restaurantId) {
    res.status(400);
    throw new error('Unauthorized!');
  }

  const updatedInventoryItem = await Inventory.findByIdAndUpdate(
    req.params.id,
    req.body.inventoryItem,
    { new: true }
  );

  res.status(200).json(updatedInventoryItem);
});

module.exports = { getInventory, updateInventory };
