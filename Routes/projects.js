// Routes/projects.js
const express = require("express");
const router = express.Router();
const projectController = require("../Controllers/projectController");


router.get("/", projectController.getAllProject)
router.get("/:id", projectController.getProjectByID);
router.post("/", projectController.registerProjects);
router.put("/:id", projectController.updateProjectById);
router.patch("/:id", projectController.projectPatches);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
