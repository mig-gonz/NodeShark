const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const { User } = db;

// Register User
router.post("/register", async (req, res) => {
  let { password, ...rest } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      ...rest,
      passwordDigest: hashedPassword,
    });
    res.json(user);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
