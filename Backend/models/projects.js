const mongoose = require("mongoose");
const moment = require("moment");

const projectsSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  employees: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  locations: {
    type: String,
    required: true,
  },
});

exports.Project = mongoose.model("Project", projectsSchema);
