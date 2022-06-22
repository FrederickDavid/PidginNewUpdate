const mongoose = require("mongoose");
require("dotenv").config;

const url = process.env.URL;

mongoose.connect(url).then(() => {
  console.log("Database is now connected and ready to Go.....>>>");
});
