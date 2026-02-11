const express = require("express");
const router = express.Router();
const { updatebooking } = require("../../controllers/bookings/updatebooking");
const authmiddleware = require("../../middlewares/auth");

// RESTful: PUT /bookings/:bookingid
router.put("/:bookingid", authmiddleware, updatebooking);

// Backward compatibility: POST /updatebooking/:bookingid
router.post("/updatebooking/:bookingid", authmiddleware, updatebooking);

module.exports = router;
