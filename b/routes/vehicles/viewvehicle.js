const express = require("express");
const { viewVehicles } = require("../../controllers/vehicles/viewvehicle");
const authVerify = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

const router = express.Router();

router.get(
  "/",
  authVerify,
  authorizeRoles("driver"),
  viewVehicles
);

module.exports = router;
