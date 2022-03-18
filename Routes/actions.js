const router = require("express").Router();
const actionController = require("../Controllers/actionController");

router.post("/", actionController.registerActions);

module.exports = router;
