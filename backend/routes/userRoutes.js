// routes/userRoutes.js
const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const User = require("../models/user");
const router = express.Router();
const upload=require("../middleware/uploadMiddleware");
router.put("/update-profile/bio", verifyToken, async (req, res) => {
  try {
    const { userId, bio } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, {bio: bio }, { new: true });
    res.json({ message: "Profile Updated successfully", user: updatedUser , success: true});
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

router.put("/update-profile/picture", verifyToken, upload.single("profilePicture"), async (req, res) => {
  try {
    const userId = req.userId; // Extract user ID from token
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicture: imageUrl },
      { new: true }
    );

    res.json({ message: "Profile picture updated successfully", user: updatedUser, success: true });
  } catch (error) {
    console.error("Error updating profile picture:", error);
    res.status(500).json({ message: "Error updating profile picture" });
  }
});
module.exports = router;