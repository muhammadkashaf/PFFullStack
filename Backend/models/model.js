const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
});

exports.Modal = mongoose.model("Modal", modelSchema);
