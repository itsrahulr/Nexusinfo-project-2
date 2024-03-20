const User = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check name entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    // Check password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    // Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Add user to the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// login endpoint
const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // check if user exists
    const user = await User.findOne({ name });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check if passwords match
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Password does not match",
      });
    }

    // Passwords match
    return res.json({
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
