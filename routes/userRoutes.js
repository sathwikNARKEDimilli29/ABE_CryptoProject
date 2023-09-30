const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticationMiddleware = require("../middleware/authentication");

// User Registration
router.post("/register", userController.registerUser);

// User Login
router.post("/login", userController.loginUser);

module.exports = router;
