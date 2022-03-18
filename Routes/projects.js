const router = require("express").Router();
const projectController = require("../Controllers/projectController");

router.post("/", projectController.registerProjects);

module.exports = router;
