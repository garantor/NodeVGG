const router = require("express").Router();
const actionController = require("../Controllers/actionController");

router.post("/", actionController.registerActions);
router.get("/", actionController.getAllActions);
router.get("/:id", actionController.getActionById);

module.exports = router;
