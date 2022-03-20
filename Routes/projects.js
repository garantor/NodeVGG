const express = require("express");
const router = express.Router();
const projectController = require("../Controllers/projectController");


router.post("/", projectController.registerProjects);
router.get("/", projectController.getAllProject)
router.get("/:id", projectController.getProjectByID);
router.put("/:id", projectController.updateProjectById);
router.patch("/:id", projectController.projectPatches);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
