// Routes/users.js
const express = require('express');
const router = express.Router()
const userController = require("../Controllers/usersController");

router.post("/", userController.registerUsers);
router.get("/", userController.getAllUsers);

module.exports =router