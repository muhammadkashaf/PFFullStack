const { Project } = require("../models/projects");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({ status: true, projects });
  } catch (error) {
    res.json({ status: false, error });
  }
});

router.get("/search", (req, res) => {
  const name = req.query.clientName;
  const project = req.query.projectName;
  const location = req.query.locations;
  const skill = req.query.skills;
  const date = req.query.startDate;

  Project.find(
    name
      ? {
          clientName: `${name}`,
        }
      : project
      ? {
          projectName: `${project}`,
        }
      : location
      ? {
          locations: `${location}`,
        }
      : skill
      ? {
          skills: `${skill}`,
        }
      : date
      ? {
          date: `${date}`,
        }
      : null
  )
    .then((result) => {
      res.status(200).json({ status: true, result });
    })
    .catch((error) =>
      res.status(500).json({ status: false, message: "No Result Found" })
    );
});

router.post("/", async (req, res) => {
  try {
    let project = new Project();
    project.projectName = req.body.projectName;
    project.clientName = req.body.clientName;
    project.startDate = req.body.startDate;
    project.employees = req.body.employees;
    project.experience = req.body.experience;
    project.skills = req.body.skills;
    project.locations = req.body.locations;
    await project.save();
    res
      .status(200)
      .json({ status: true, message: "projects Data Added Successfully" });
  } catch (error) {
    res.json({ status: false, error });
  }
});

module.exports = router;
