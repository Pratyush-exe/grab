const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Restaurant = require('../models/RestaurantModel');

// @desc    Get all restaurants
// @route   GET /api/
// @access  Public
const getRestaurant = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find();
  res.status(200).json(restaurants);
});

// @desc    Register Restaurant
// @route   POST /api/new/restaurant
// @access  Public
const registerRestaurant = asyncHandler(async (req, res) => {
  const { name, secretKey, city, state, country, position } =
    req.body;

  if (
    !name ||
    !secretKey ||
    !city ||
    !state ||
    !country ||
    !position
  ) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if restaurant Already Exists
  const restaurantExists = await Restaurant.findOne({ secretKey });

  if (restaurantExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const restaurant = await Restaurant.create({
    name,
    secretKey,
    city,
    state,
    country,
    position,
  });

  if (restaurant) {
    res.status(201).json({
      _id: restaurant.id,
      name: restaurant.name,
      secretKey: restaurant.secretKey,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Login restaurants
// @route   POST /login
// @access  Public
const loginRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findOne({
    secretKey: req.body.secretKey,
  });

  if (!restaurant) {
    res.status(400).json("Secret Key doesn't match");
  }

  res.status(200).json({
    _id: restaurant._id,
    name: restaurant.name,
  });
});

module.exports = {
  getRestaurant,
  registerRestaurant,
  loginRestaurant,
};
