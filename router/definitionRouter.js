const express = require("express");
const {
  deleteDefinition,
  createDefinition,
  getDefinition,
} = require("../controller/definitionController");

const router = express.Router();

router.route("/:id/:postId/definitions").post(createDefinition);
// router.route("/:id/:postId/:definitionId").get(getDefinition);
router.route("/:id/:postId/:definitionId").get(getDefinition);

router.route("/:id/:postID/:definitionId").delete(deleteDefinition);

module.exports = router;
