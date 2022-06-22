const mongoose = require("mongoose");

const bioModel = mongoose.Schema(
  {
    about: {
      type: String,
    },
    gender: {
      type: String,
    },
    avatar: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bios", bioModel);
