
const express = require("express");
const { addvehicle } = require("../../controllers/vehicles/addvehicle");
const authVerify = require("../../middlewares/auth");
const { authorizeRoles } = require("../../middlewares/userRole");
const upload = require("../../middlewares/multer");

const router = express.Router();

router.post(
  "/",
  authVerify,
  authorizeRoles("driver"),
  upload.array("images", 5),
  addvehicle
);

module.exports = router;
