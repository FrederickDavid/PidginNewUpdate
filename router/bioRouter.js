const express = require("express");
const upload = require("../utils/multer");
const {
  getAllBio,
  getBio,
  createBio,
  deleteBio,
} = require("../controller/bioController");
const router = express.Router();

router.route("/bios").get(getAllBio);
router.route("/:id/createBio").post(upload, createBio);

router.route("/:id/:bioId").get(getBio).delete(deleteBio);

module.exports = router;
