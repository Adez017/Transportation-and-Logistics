const express = require("express");
const router = express.Router();
const { getbooking } = require("../../controllers/bookings/getbooking");
const authmiddleware = require("../../middlewares/auth");

// RESTful: GET /bookings
router.get("/", authmiddleware, getbooking);

// Backward compatibility: GET /getbooking
router.get("/getbooking", authmiddleware, getbooking);

module.exports = router;
