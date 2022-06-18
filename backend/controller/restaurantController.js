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
  const { name, email, password, city, state, country, position } =
    req.body;

  if (
    !name ||
    !email ||
    !password ||
    !city ||
    !state ||
    !country ||
    !position
  ) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if User Already Exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const restaurant = await Restaurant.create({
    name,
    email,
    password: hashedPassword,
    city,
    state,
    country,
    position,
  });

  if (restaurant) {
    res.status(201).json({
      _id: restaurant.id,
      name: restaurant.name,
      email: restaurant.email,
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
  const restaurant = await restaurant.findOne({
    email: req.body.email,
  });

  if (!restaurant) {
    res.status(400).json('Wrong username or password');
  }

  // validate password
  const validPassword = await bcrypt.compare(
    req.body.password,
    restaurant.password
  );

  if (!validPassword) {
    res.status(400).json('Wrong username or password');
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
