const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    breweryId: {
        type: String
    },
    username: {
        type: String,
        required: true,
    },
  rating: {
    type: Number,
    required: [true, "Please provide a rating between 1 and 5"],
  },
  comment: {
    type: String,
    required: true,
  },
});

const breweryReview = mongoose.model("reviews", reviewSchema);

module.exports = breweryReview;