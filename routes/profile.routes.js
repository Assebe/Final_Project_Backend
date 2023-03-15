const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/profile/:id", async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The profile was not found");
  }
  const { id } = req.params;
  try {
    const profile = await User.findById(id).populate("favoriteRadios");
    res.json(profile);
  } catch (error) {
    res.json(error);
  }
});

router.put("/profile/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;
  console.log(id, name, email);

  try {
    const updatedProfile = await User.findByIdAndUpdate(id, {
      name,
      email,
    });
    console.log(updatedProfile);
    res.json(updatedProfile);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
