const { Modal } = require("../models/model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const modals = await Modal.find({});
    res.status(200).json({ status: true, modals });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
});

router.post("/", async (req, res) => {
  try {
    let modal = new Modal();
    modal.name = req.body.name;
    modal.experience = req.body.experience;
    modal.location = req.body.location;
    modal.skills = req.body.skills;

    await modal.save();
    res
      .status(200)
      .json({ status: true, message: "Model data Added Succesfully" });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
});

module.exports = router;
