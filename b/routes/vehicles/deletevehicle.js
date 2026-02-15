
const express = require("express");
const router = express.Router();
const { deleteVehicleByNumber } = require("../../controllers/vehicles/deletevehicle");
const authMiddleware = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

// Delete by vehicle number
router.delete(
  "/:vehicleNumber",
  authMiddleware,
  authorizeRoles("driver"),
  deleteVehicleByNumber
);

// Backward compatibility: POST /deletevehicle/:vehicleNumber
router.post("/deletevehicle/:vehicleNumber", authMiddleware, deleteVehicleByNumber);

module.exports = router;
