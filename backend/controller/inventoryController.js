const asyncHandler = require('express-async-handler');
const Inventory = require('../models/InventoryModel');
const Restaurant = require('../models/RestaurantModel');

// @desc    Set Restaurant Inventory
// @route   POST /api/new/inventory
// @access  Protected
const setInventory = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.body.restaurantId);

  if (!restaurant) {
    res.status(400);
    throw new error('Restaurant not found');
  }

  if (!req.body.title || !req.body.quantity) {
    res.status(400);
    throw new error('Title Or Quantity is Missing');
  }

  const inventoryItem = await Inventory.create({
    restaurant: req.body.restaurantId,
    title: req.body.title,
    quantity: req.body.quantity,
  });

  res.status(200).json(inventoryItem);
});

// @desc    Get Restaurant Inventory
// @route   GET /api/inventory/:restaurantId
// @access  Public
const getInventory = asyncHandler(async (req, res) => {
  const inventoryItems = await Inventory.find({
    restaurant: req.params.restaurantId,
  });
  res.status(200).json(inventoryItems);
});

// @desc    Update Inventory
// @route   PUT /api/update/:id
// @access  Public
const updateInventory = asyncHandler(async (req, res) => {
  const inventoryItem = await Inventory.findById(req.params.id);

  if (!inventoryItem) {
    res.status(400);
    throw new error('Item not found');
  }

  const restaurantId = inventoryItem.restaurant.toString();

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

module.exports = { getInventory, updateInventory, setInventory };
