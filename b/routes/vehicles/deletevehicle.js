
const express = require("express");
const router = express.Router();
const { deleteVehicleByNumber } = require("../../controllers/vehicles/deletevehicle");
const authMiddleware = require("../../middlewares/auth");

// RESTful: DELETE /vehicles/:vehicleNumber
router.delete("/:vehicleNumber", authMiddleware, deleteVehicleByNumber);

// Backward compatibility: POST /deletevehicle/:vehicleNumber
router.post("/deletevehicle/:vehicleNumber", authMiddleware, deleteVehicleByNumber);

module.exports = router;

