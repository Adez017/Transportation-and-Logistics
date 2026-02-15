const express = require("express");
const router = express.Router();
const { createbooking } = require("../../controllers/bookings/createbooking");

const authmiddleware = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

router.post(
  "/",
  authmiddleware,
  authorizeRoles("shipper"),
  createbooking
);

// Backward compatibility: POST /createbooking
router.post("/createbooking", authmiddleware, createbooking);

module.exports = router;
