const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", playerController.index);
router.post("/", playerController.store);
router.get("/:id", playerController.detail);

module.exports = router;
