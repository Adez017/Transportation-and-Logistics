const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer");
const { updateVehicleByNumber } = require("../../controllers/vehicles/updatevehicle");
const authMiddleware = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");

router.put(
  "/:vehicleNumber",
  authMiddleware,
  authorizeRoles("driver"),
  upload.single("image"),
  updateVehicleByNumber
);

module.exports = router;
