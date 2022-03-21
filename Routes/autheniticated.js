// Routes/authenticate.js
const express = require("express");
const router = express.Router();
const authenticate = require("../Controllers/authController");

router.post("/", authenticate.authenticateUser);

module.exports = router;
