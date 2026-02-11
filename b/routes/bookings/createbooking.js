const express = require("express");
const router = express.Router();
const { createbooking } = require("../../controllers/bookings/createbooking");
const authmiddleware = require("../../middlewares/auth");

// RESTful: POST /bookings
router.post("/", authmiddleware, createbooking);

// Backward compatibility: POST /createbooking
router.post("/createbooking", authmiddleware, createbooking);

module.exports = router;
