const express = require("express");
const {
  getMyLike,
  createMyLike,
  deleteMyLike,
} = require("../controller/newLikeController");
const router = express.Router();

// router.route("/likes").get(getAllPost);
router.route("/:UserID/:postID/:definitionID/like").post(createMyLike);
router.route("/:UserID/:postID/:definitionID/like").get(getMyLike);

router
  .route("/:UserID/:postID/:definitionID/like/:likeID")
  .delete(deleteMyLike);

module.exports = router;
