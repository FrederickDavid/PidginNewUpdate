const userModel = require("../model/userModel");
const bioModel = require("../model/bioModel");
const mongoose = require("mongoose");

const getAllBio = async (req, res) => {
  try {
    const bio = await bioModel.find().sort({ word: "asc" });

    res.status(200).json({
      status: "All Bio Found Successfully",
      totalBio: bio.length,
      data: bio,
    });
  } catch (error) {
    res.status(404).json({
      message: "No Bio Found",
    });
  }
};
const getBio = async (req, res) => {
  try {
    const bio = await bioModel.findById(req.params.bioID);

    res.status(200).json({
      status: "User  Bio Found Successfully",
      data: bio,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
const deleteBio = async (req, res) => {
  try {
    const bio = await bioModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Deleted successfully",
      data: bio,
    });
  } catch (error) {
    res.status(404).json({
      message: "Unable to delete Bio",
    });
  }
};
const createBio = async (req, res) => {
  try {
    const { about, gender } = req.body;
    const getUser = await userModel.findById(req.params.id);
    const bioContent = new bioModel({
      about,
      gender,
      avatar: req.file.path,
    });

    bioContent.user = getUser;
    bioContent.save();

    getUser.bio.push(mongoose.Types.ObjectId(bioContent._id));
    getUser.save();

    res.status(201).json({
      status: "Created Successfully",
      data: bioContent,
    });
  } catch (error) {
    res.status(404).json({
      message: "Can't create bio",
    });
  }
};

module.exports = {
  getAllBio,
  getBio,
  createBio,
  deleteBio,
};
