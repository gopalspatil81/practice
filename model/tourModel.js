const mongoose = require("mongoose");

const tourShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  discription: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model("Tour", tourShema);

module.exports = Tour;
