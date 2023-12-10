const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  });
  
  const breweryUser = mongoose.model("users", userSchema);
  
  module.exports = breweryUser;