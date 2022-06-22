const express = require("express");
const upload = require("../utils/multer");
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
  verifyUser,
  signinUser,
  resetUser,
  newPassword,
} = require("../controller/userController");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/signin").post(signinUser);

router.route("/reset/:id/token").post(resetUser);
router.route("/:id/token").post(newPassword);
router.route("/:id/token").get(verifyUser);

router.route("/register").post(createUser);
router.route("/:id").patch(updateUser).get(getUser).delete(deleteUser);

module.exports = router;
