const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer");
const { updateVehicleByNumber } = require("../../controllers/vehicles/updatevehicle");
const authMiddleware = require("../../middlewares/auth");

// RESTful: PUT /vehicles/:vehicleNumber
router.put("/:vehicleNumber", authMiddleware, upload.single("image"), updateVehicleByNumber);

// Backward compatibility: POST /updatevehicle/:vehicleNumber
router.post("/updatevehicle/:vehicleNumber", authMiddleware, upload.single("image"), updateVehicleByNumber);

module.exports = router;
