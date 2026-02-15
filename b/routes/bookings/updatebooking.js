const express = require("express");
const router = express.Router();
const { updatebooking } = require("../../controllers/bookings/updatebooking");

const authmiddleware = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

router.put(
  "/:id",
  authmiddleware,
  authorizeRoles("shipper"),
  updatebooking
);

module.exports = router;
