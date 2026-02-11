const express = require("express");
const { viewvehiclebydriverEmail } = require("../../controllers/vehicles/viewvehiclebydriverEmail");
const authVerify = require("../../middlewares/auth");

const router = express.Router();

// RESTful: GET /vehicles/driver/:driverEmail
router.get("/driver/:driverEmail", authVerify, viewvehiclebydriverEmail);

// Backward compatibility: GET /viewvehiclebydriverEmail/:driverEmail
router.get("/viewvehiclebydriverEmail/:driverEmail", authVerify, viewvehiclebydriverEmail);

module.exports = router;
