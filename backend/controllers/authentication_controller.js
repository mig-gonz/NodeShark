const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  let user = await User.findOne({
    where: { email: req.body.email },
  });

  if (
    !user ||
    !(await bcrypt.compare(req.body.password, user.passwordDigest))
  ) {
    res.status(404).json({
      message: `Could not find a user with the provided username and password`,
    });
  } else {
    // req.session.userId = user.userId;
    req.session.user = user;
    res.json({ user });
  }
});

router.get("/profile", async (req, res) => {
  try {
    if (req.session.user) {
      res.json(req.session.user);
    } else {
      res.json(null);
    }
  } catch {
    res.json(null);
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

module.exports = router;
