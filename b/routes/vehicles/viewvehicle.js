const express = require("express");
const { viewVehicles } = require("../../controllers/vehicles/viewvehicle");
const authVerify = require("../../middlewares/auth");

const router = express.Router();

// RESTful: GET /vehicles
router.get("/", authVerify, viewVehicles);

// Backward compatibility: GET /viewvehicle
router.get("/viewvehicle", authVerify, viewVehicles);

module.exports = router;
