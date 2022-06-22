const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    verifiedToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
    bio: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bios",
      },
    ],
    saved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "saves",
      },
    ],
    definition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "definitions",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userModel);
