const express = require("express");
const router = express.Router();
const { getbooking } = require("../../controllers/bookings/getbooking");

const authmiddleware = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

router.get(
  "/",
  authmiddleware,
  authorizeRoles("shipper"),
  getbooking
);

module.exports = router;
