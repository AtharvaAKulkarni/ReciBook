// routes/userRoutes.js
const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const User = require("../models/user");
const router = express.Router();

router.put("/update-profile", verifyToken, async (req, res) => {
  try {
    const { userId, profilePicture, bio } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { profilePicture, bio }, { new: true });
    res.json({ message: "Profile Updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

router.post("/get-profile", verifyToken, async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    res.json({ message: "Profile fetched successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Profile cannot be fetched!" });
  }
});
module.exports = router;