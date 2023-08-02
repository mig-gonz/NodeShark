const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

const { User } = db;

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({
      where: { email: req.body.email },
    });

    if (
      !user ||
      !(await bcrypt.compare(req.body.password, user.passwordDigest))
    ) {
      res.status(404).json({
        message: "Could not find a user with the provided email and password",
      });
    } else {
      req.session.user = user;

      res.set(
        "Access-Control-Allow-Origin",
        "https://aws-deployment.d24dzy57n244p8.amplifyapp.com"
      );
      res.set("Access-Control-Allow-Credentials", "true");

      res.json({ user });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/profile", async (req, res) => {
  try {
    if (req.session.user) {
      res.json(req.session.user);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    req.session.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: "Logout failed" });
  }
});

// New code block starts here
router.options("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin":
      "https://aws-deployment.d24dzy57n244p8.amplifyapp.com",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    "Access-Control-Allow-Credentials": true,
  });
  res.sendStatus(200);
});
// New code block ends here

module.exports = router;
