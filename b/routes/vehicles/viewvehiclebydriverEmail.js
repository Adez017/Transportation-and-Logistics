const express = require("express");
const { viewvehiclebydriverEmail } = require("../../controllers/vehicles/viewvehiclebydriverEmail");
const authVerify = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

const router = express.Router();

router.get(
  "/:driverEmail",
  authVerify,
  authorizeRoles("driver"),
  viewvehiclebydriverEmail
);

module.exports = router;
