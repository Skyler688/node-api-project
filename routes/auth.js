const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.get("/home", authController.home);
router.get("/protected", authController.protectedRoute);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
